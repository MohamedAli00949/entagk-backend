const Template = require("./../models/template");
const Task = require("./../models/task");

/**
 * addTemplate ===>> add template to database
 * getAll ===>> get all public templates from database
 * getOne ===>> get one template useing id
 * getTasksForOne ===>> get template tasks using template id
 * getForUser ===>> get all users templates
 * addToTodoList ===>> add template and make it only for todo list usage
 * getAllForTodo ===>> get templates for using at todo list
 * updataTemplate ===>> updata template for all templates (enclode todo list templates) 
 * deleteTemplate ===>> delete template for all templates (enclode todo list templates)
 * Write unit testing for each endpoint
 */

/**
 * task => {
//  *  userId,
 *  name,
 *  est,
//  *  act,
 *  notes,
//  *  createdAt,
//  *  updatedAt,
 *  order,
//  *  template: {
//  *    id: templateId,
//  *    todo: no
//  *  },
//  *  taskClone
 * }
 */

const TempleteControllers = {
  /**
   * @param {body, authentication, ....} req 
   * @param {*} res 
   * 
   * first, get all proparties of the template from the request body(req.body);
   * Then validate the data before saving at database.
   * last, response with the comming data from the database
   */
  addTemplate: async (req, res) => {
    try {
      const {
        name,
        visibility,
        desc,
        tasks,
        iconURL,
        color,
        time,
        timeForAll,
        autoBreaks,
        autoPomodors,
        autoStartNextTask,
        longInterval,
        alarmType,
        alarmVolume,
        alarmRepet,
        tickingType,
        tickingVolume
      } = req.body;

      if (!name || !desc) return res.status(400).json({ message: "Please enter the essential data (eg: name or description) of the template" });

      if (!name?.trim() || !desc) return res.status(400).json({ message: "Please, complete the task data at least name and descritption" })
      if (name?.length > 50 && name?.trim()) return res.status(400).json({ message: "The name length is more than 50 characters." })

      if (desc?.length > 500 && desc?.trim()) return res.status(400).json({ message: "The notes length is more than 50 characters." })

      if (!tasks || tasks.length === 0) return res.status(400).json({ message: "please enter the template tasks." });

      const templateData = await Template.create({
        name,
        visibility,
        description: desc,
        iconURL,
        color,
        time,
        timeForAll,
        autoBreaks,
        autoPomodors,
        autoStartNextTask,
        longInterval,
        alarmType,
        alarmVolume,
        alarmRepet,
        tickingType,
        tickingVolume,
        userId: req.userId
      });

      tasks.forEach((task, index) => {
        if (!task.name?.trim() || !task.est) return res.status(400).json({ message: "Please, complete the task data at least name and est" });
        if (task.est <= 0) return res.status(400).json({ message: "The est shouldn't be negative number." });
        if (task.name?.length > 50 && task.name?.trim()) return res.status(400).json({ message: "The name length is more than 50 characters." });

        if (task.notes?.length > 500 && task.notes?.trim()) return res.status(400).json({ message: "The notes length is more than 50 characters." });

        if (!task.order) task.order = index;
        task.template = { _id: templateData._id, todo: false };
        task.userId = req.userId
      });

      const tasksIdsData = await Task.insertMany(tasks);

      const tasksIds = tasksIdsData.map(task => task._id);

      console.log(String(templateData._id));
      const updateTemplate = await Template.findByIdAndUpdate(templateData._id, { tasks: tasksIds }, { new: true });

      res.status(200).json(updateTemplate);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getAll: async (req, res) => {
    const { page } = req.query || 1;
    try {
      const limit = 25;
      const startIndex = (Number(page) - 1) * limit;

      const total = await Template.countDocuments({ visibility: { $eq: true } });
      const templates = await Template.find({ visibility: { $eq: true } }).limit(limit).skip(startIndex);

      res.status(200).json({
        templates,
        total,
        currentPage: page ? Number(page) : total === 0 ? 0 : 1,
        numberOfPages: Math.ceil(total / limit)
      });

    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
  funcName: async (req, res) => {
    try {

    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
};

module.exports = TempleteControllers;