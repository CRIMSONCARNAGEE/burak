import mongoose, { Schema } from "mongoose";
import { MemberStatus, MemberType } from '../libs/enums/member.enam'

const memeberSchema = new Schema({
  MemberType: {
    type: String,
    enum: MemberType,
    default: MemberType.USER
  },
  MemberStatus: {
    type: String,
    enum: MemberStatus,
    default: MemberStatus.ACTIVE
  },
  MemberNick: {
    type: String,
    index: {unique: true, sparse: true},
    required: true
  },
  MemberPhone: {
    type: String,
    index: {unique: true, sparse: true},
    required:true
  },
  MemberPassword: {
    type: String,
    required:true
  },
  MemberAddres: {
    type: String
  },
    MemberDesc: {
    type: String
  },
    MemberImage: {
    type: String
  },
  MemberPoints: {
    type: Number,
    default: 0
  },
},
  { timestamps: true }
);

export default mongoose.model('Member',memeberSchema)