export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    },
});

export const getMongoConnStr = () => {
    if (process.env.DATABASE_STRING) {
        return process.env.DATABASE_STRING;
    } else if (
        process.env.DATABASE_HOST &&
        process.env.DATABASE_DBNAME &&
        process.env.DATABASE_USER &&
        process.env.DATABASE_PASSWORD
    ) {
        return `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_DBNAME}`;
    } else if (
        process.env.DATABASE_HOST &&
        process.env.DATABASE_DBNAME &&
        process.env.DATABASE_USER
    ) {
        return `mongodb://${process.env.DATABASE_USER}@${process.env.DATABASE_HOST}/${process.env.DATABASE_DBNAME}`;
    } else if (process.env.DATABASE_HOST && process.env.DATABASE_DBNAME) {
        return `mongodb://${process.env.DATABASE_HOST}/${process.env.DATABASE_DBNAME}`;
    }
};
