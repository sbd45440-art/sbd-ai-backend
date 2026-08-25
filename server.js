const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "SBD AI Ultimate",
    version: "1.0",
    status: "online"
  });
});

app.post("/chat", async (req, res) => {
  try {
    const message = req.body.message;

    if (!message) {
      return res.status(400).json({
        error: "Thiếu message"
      });
    }

    // AI sẽ được kết nối ở bước tiếp theo.
    res.json({
      reply: "SBD AI đã nhận: " + message
    });

  } catch (error) {
    res.status(500).json({
      error: "Backend gặp lỗi"
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SBD AI Backend đang chạy ở cổng ${PORT}`);
});
