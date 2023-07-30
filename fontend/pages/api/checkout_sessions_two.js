const stripe = require("stripe")('sk_test_51Jwcx4JFSgBrd6IPkLrdWEQaSMWHZcVthlHI7WxP3kiiuzBJpx3OGE5vG43tSWgmVeFf8it2jH2YM76jpP0Q4I1100cQEIaKK2');

export default async function handler (req, res)
{
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "price_1KXeq5JFSgBrd6IP4xLYErMK",
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/dashboard/orderHistory?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
