// Track visitor
const trackVisitor = async (req, res) => {
  try {
    // log ip + userAgent
    const log = await Log.create({
      ip: req.ip,
      location: req.location,
      userAgent: req.headers["user-agent"],
    });
    res.status(200).json(log);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get all logs
const getLogs = async (req, res) => {
  try {
    const logs = await Log.find();
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete all logs
const deleteLogs = async (req, res) => {
  try {
    const log = await Log.deleteMany();
    res.status(200).json({ message: "deleted Successfully", log });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { trackVisitor, getLogs, deleteLogs };
