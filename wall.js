alert("wall.js подключен")
async function loadWall(userId, token) {

  const result = await vkBridge.send(
    "VKWebAppCallAPIMethod",
    {
      method: "wall.get",

      params: {
        owner_id: userId,
        count: 10,
        offset: 0,
        filter: "owner",

        access_token: token,
        v: "5.199"
      }
    }
  )

  console.log("WALL RESPONSE:", result)

  return result
}
