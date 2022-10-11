export interface SocialEntry {
  icon: string
  link: string
}

export interface CoreTeam {
  avatar: string
  name: string
  // required to download avatars from GitHub
  github: string
  twitter: string
  sponsor?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
}



const createLinks = (tm: CoreTeam): CoreTeam => {
  tm.links = [
    { icon: 'github', link: `https://github.com/${tm.github}` },
    { icon: 'twitter', link: `https://twitter.com/${tm.twitter}` },
  ]
  return tm
}

const plainTeamMembers: CoreTeam[] = [
  {
    avatar: 'https://github.com/elonehoo.png',
    name: 'Elone Hoo',
    github: 'elonehoo',
    twitter: 'huchengye',
    title: 'A fanatical open sourceror',
    desc: 'Vite\'s fanatical follower',
  },
  {
    avatar: 'https://github.com/wuaqing.png',
    name: 'wuaqing',
    github: 'wuaqing',
    twitter: 'wushiqingya',
    title: 'A collaborative being',
    desc: 'Creating tools for collaboration',
  },
  {
    avatar: 'https://github.com/2434017367.png',
    name: 'zhy',
    github: '2434017367',
    twitter: 'unknown',
    title: 'A tech lead, fullstack developer',
    desc: 'Author of minio-serve-java',
  },
  {
    avatar: 'https://github.com/LiChen233.png',
    name: '李晨',
    github: 'LiChen233',
    twitter: 'unknown',
    title: 'A tech lead, fullstack developer',
    desc: 'Author of simple-robot and generator',
  },
  {
    avatar: 'https://github.com/cjloveqhy.png',
    name: 'cjloveqhy',
    github: 'cjloveqhy',
    twitter: 'unknown',
    title: 'backend developer',
    desc: 'INet Community Team Member',
  },
]

const teamMembers = plainTeamMembers.map(tm => createLinks(tm))

export { teamMembers }
