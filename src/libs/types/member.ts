import { MemberStatus, MemberType } from "../enums/member.enam";

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
  memberNick: string;
  memberPassword: string;
}