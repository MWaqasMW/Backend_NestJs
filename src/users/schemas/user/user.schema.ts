// src/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema() 
export class User {
  @Prop()
  name: string;
  

  @Prop({ required: true, unique: true, trim: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })
  email: string;
  

  @Prop()
  phoneNumber: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
