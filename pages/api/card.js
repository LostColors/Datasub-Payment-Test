import main from "../../database/connection";
import paymentModel from "../../database/schema";

export default async function get_Payment(req, res) {
  main().catch((error) => console.log(error));

  // const create = new paymentModel({
  //   CardNumber: "1111222233334444",
  //   ExpDate: "11/33",
  //   Cvv: "000",
  //   Amount: "20000",
  // });
  try {
    await main();
    const test = await paymentModel.create(req.body);
    res.json({ test });
  } catch (error) {
    console.log(error, "this is error");
    res.json({ error });
  }

  //   const { method } = req;

  //   switch (method) {
  //     case "GET":
  //       res.status(200).json({ method: "Get", endpoint: "card" });
  //       break;
  //     case "POST":
  //       res.status(200).json({ method: "POST", endpoint: "card" });
  //       break;
  //     default:
  //       res.setHeader("Allow", ["GET", "POST"]);
  //       res.status(405).end(`Method ${method} Not Allowed!`);
  //       break;
  //   }
}
