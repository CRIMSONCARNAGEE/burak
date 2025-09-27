import session from "express-session";
import { MemberStatus, MemberType } from "../enums/member.enum";
import { Request } from "express";
import { Session } from "express-session";

export interface Member {
  MemberType: MemberType;
  MemberStatus: MemberStatus;
  MemberNick: string;
  MemberPhone: string;
  MemberPassword?: string;
  MemberAddres?: string;
  MemberDesc?: string;
  MemberImage?: string;
  MemberPoints: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemberInput {
  MemberType?: MemberType;
  MemberStatus?: MemberStatus;
  MemberNick: string;
  MemberPhone: string;
  MemberPassword: string;
  MemberAddres?: string;
  MemberDesc?: string;
  MemberImage?: string;
  MemberPoints?: number;
}

export interface LoginInput {
  MemberNick: string;
  MemberPassword: string;
}

export interface AdminRequest extends Request {
  member: Member;
  session: Session & { member: Member };
}