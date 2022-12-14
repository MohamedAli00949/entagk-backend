const Setting = require("./../models/setting");

const validNumber = (number, min, max) => {
  return number < max && number >= min ? true : false;
}

const validAudioType = (audio) => {
  return !audio?.name || !audio?.src ? false: true;
}

const SettingControllers = {
  getSetting: async (req, res) => {
    try {
      const userId = req.userId;

      const settingData = await Setting.findOne({ userId: userId });

      res.status(200).json(settingData);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
  update: async (req, res) => {
    try {
      const userId = req.userId;
      const {
        format,
        time,
        autoBreaks,
        autoPomodors,
        autoStartNextTask,
        longInterval,
        alarmType,
        alarmVolume,
        alarmRepet,
        tickingType,
        tickingVolume,
        clickType,
        clickVolume,
        focusMode,
        notificationType,
        notificationInterval
      } = req.body;

      if (Object.keys(req.body).length === 0) return res.status(400).json({ message: "No valid data sended" });

      if (format && ["analog", "digital"].indexOf(format?.toLocaleLowerCase()) < 0) return res.status(400).json({ message: "invalid timer format" });

      if ((typeof time !== 'object' || !time["PERIOD"] || !time["SHORT"] || !time["LONG"] || !validNumber(time["PERIOD"], 1, 3600) || !validNumber(time["SHORT"], 1, 3600) || !validNumber(time["LONG"], 1, 3600)) && time) return res.status(400).json({ message: "The time should be at this format {PERIOD: ---, SHORT: ---, LONG: ---} with positive numbers" })

      if (typeof autoBreaks !== 'boolean' && autoBreaks) return res.status(400).json({ message: "The property of the autoBreaks is boolean" })
      if (typeof autoPomodors !== 'boolean' && autoPomodors) return res.status(400).json({ message: "The property of the autoPomodors is boolean" })
      if (typeof autoStartNextTask !== 'boolean' && autoStartNextTask) return res.status(400).json({ message: "The property of the autoStartNextTask is boolean" })

      if (
        ((!validNumber(alarmVolume, 10, 100)) && alarmVolume) ||
        ((!validNumber(tickingVolume, 0, 100)) && tickingVolume) ||
        ((!validNumber(clickVolume, 0, 100)) && clickVolume)
      ) return res.status(400).json({ message: "invalid sound volume" });

      if (longInterval < 2 && longInterval) return res.status(400).json({ message: "The long interval must be more than 2" })

      if (
        (!validAudioType(alarmType) && alarmType) ||
        (!validAudioType(tickingType) && tickingType) ||
        (!validAudioType(clickType) && clickType)
      )
        return res.status(400).json({ message: "The sound type should be contines name and src." });

      if (typeof focusMode !== 'boolean' && focusMode) return res.status(400).json({ message: "The property of the focusMode is boolean" })

      if (["last", "every"].indexOf(notificationType?.toLocaleLowerCase()) < 0 && notificationType) return res.status(400).json({ message: "Choose the notification type from one of last or every" });

      if (notificationInterval && !validNumber(notificationInterval, 1, 60)) return res.status(400).json({ message: "Invalid notification interval between 1 and 60" });

      const oldSetting = await Setting.findOne({ userId });
      const newSetting = Object.assign(oldSetting, {
        format,
        time: Object.assign(oldSetting.time, time),
        autoBreaks,
        autoPomodors,
        autoStartNextTask,
        longInterval,
        alarmType,
        alarmVolume,
        alarmRepet,
        tickingType,
        tickingVolume,
        clickType,
        clickVolume,
        focusMode,
        notificationType,
        notificationInterval
      });

      const updatedSetting = await Setting.findOneAndUpdate({ userId }, newSetting, { new: true });

      res.status(200).json(updatedSetting);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
};

module.exports = SettingControllers;