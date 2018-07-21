module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.createTable('balances', {
      id: {
        type: Sequelize.STRING(191),
        primaryKey: true,
      },
      balance: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    })
  ),
  down: queryInterface => (
    queryInterface.dropTable('balances')
  ),
};
