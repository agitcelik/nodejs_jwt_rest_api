module.exports = (sequelize, Sequelize) => {
	const Form = sequelize.define('forms', {
	formId: {
		primaryKey: true,
		type: Sequelize.INTEGER,
	},
	  title: {
		  type: Sequelize.STRING
	  },
	  tableQuery: {
		  type: Sequelize.STRING
	  }
	
	}, {underscored: true});
	
	return Form;
}