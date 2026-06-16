import express from "express";
import path from "path";
import Stripe from "stripe";
import { Resend } from "resend";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- API Routes --- //

  app.post("/api/notify-order", async (req, res) => {
    try {
      const { order, cart } = req.body;
      
      const resendKey = process.env.RESEND_API_KEY;
      const notificationEmail = process.env.OWNER_EMAIL;
      
      // If we don't have keys, silently succeed so the frontend still shows success to the user
      if (!resendKey || !notificationEmail) {
        return res.json({ success: true, warning: 'Email notifications not configured yet' });
      }

      const resend = new Resend(resendKey);
      
      const customer = order.payer?.name?.given_name + ' ' + (order.payer?.name?.surname || '');
      const email = order.payer?.email_address;
      const amount = order.purchase_units[0]?.amount?.value;
      const address = order.purchase_units[0]?.shipping?.address;
      
      const itemsHtml = cart.map((item: any) => `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd">${item.product.title}</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: center;">${item.quantity}</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: left;">₪${item.product.price}</td>
        </tr>
      `).join('');

      await resend.emails.send({
        from: 'Shop Orders <onboarding@resend.dev>', // Developer test domain allowed by Resend initially
        to: notificationEmail,
        subject: `לקוח חדש שילם בפייפאל! ₪${amount} - הזמנה חדשה`,
        html: `
          <div dir="rtl" style="font-family: sans-serif; color: #333;">
            <h2 style="color: #d4af37;">הזמנה חדשה התקבלה ושולמה בהצלחה!</h2>
            <p><strong>לקוח:</strong> ${customer} (${email})</p>
            <p><strong>שולם הכולל:</strong> ₪${amount}</p>
            
            <h3 style="margin-top: 20px;">כתובת למשלוח:</h3>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
              ${address?.address_line_1 || ''}<br/>
              ${address?.address_line_2 ? address.address_line_2 + '<br/>' : ''}
              ${address?.admin_area_2 || ''}, ${address?.country_code || ''}<br/>
              מיקוד: ${address?.postal_code || ''}
            </p>

            <h3 style="margin-top: 20px;">עגלת הקניות:</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
              <thead>
                <tr style="background: #f5f5f5;">
                  <th style="padding: 8px; text-align: right;">מוצר</th>
                  <th style="padding: 8px; text-align: center;">כמות</th>
                  <th style="padding: 8px; text-align: left;">מחיר</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>
          </div>
        `,
      });
      
      res.json({ success: true });
    } catch (error: any) {
      console.error('Notification error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // --- Vite Middleware for Development --- //

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
