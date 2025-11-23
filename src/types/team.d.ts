export interface TeamMemberLinks {
  github?: string
  researchgate?: string
  googlescholar?: string
  [key: string]: string
}

export interface OprichterTeamMember {
  name: string
  image: string
}

export interface BestuurTeamMember {
  name: string
  position: string
}

export interface OverigTeamMember {
  name: string
  position: string
}
