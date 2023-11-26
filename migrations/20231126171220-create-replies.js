'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Replies', {
      ReplyID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PostID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Posts',
          key: 'PostID'
        }
      },
      UserID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'UserID'
        }
      },
      ReplyContent: {
        type: Sequelize.TEXT
      },
      ReplyTimestamp: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Replies');
  }
};
