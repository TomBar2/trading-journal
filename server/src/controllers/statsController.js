import * as statsService from "../services/statsService.js";

/***

 ***/
export async function getAvgReturnById(req, res) {
  try {
    const { id } = req.params;
    const userId = parseInt(id);
    const avgReturn = await statsService.getAvgReturnById(userId);
    res.json({ avgReturn });
  } catch (error) {
    console.log("[Stat Controller] getAvgReturnById", error);
    res.status(500).json({ error: error });
  }
}
