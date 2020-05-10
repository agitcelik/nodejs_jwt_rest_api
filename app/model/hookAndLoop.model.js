module.exports = (sequelize, Sequelize) => {
	const HookAndLoop = sequelize.define('hookAndLoop', {
	recordId: {
		primaryKey: true,
		type: Sequelize.INTEGER,
	},
	definition: {
        type: Sequelize.STRING
    }
	
	}, {underscored: true});
	
	return HookAndLoop;
} 