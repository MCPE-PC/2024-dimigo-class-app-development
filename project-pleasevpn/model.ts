import * as mongoose from 'mongoose';

export const originPathnameModel = mongoose.model(
	'originPathname',
	new mongoose.Schema({
		originPathname: String,
		enabled: Boolean,
		lockRemainder: Number,
		createdAt: Date,
	})
);

mongoose.connect('mongodb://localhost/testDatabase');
