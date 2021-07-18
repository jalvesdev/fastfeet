module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgree',
  password: 'docker',
  database: 'fastfeet',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
