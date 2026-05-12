import React from 'react'

const avatarThemes = [
  { bg: "#DBEAFE", color: "#1E40AF" },
  { bg: "#FCE7F3", color: "#9D174D" },
  { bg: "#DCFCE7", color: "#166534" },
  { bg: "#FEF3C7", color: "#92400E" },
  { bg: "#EDE9FE", color: "#5B21B6" },
  { bg: "#FEE2E2", color: "#991B1B" },
  { bg: "#CCFBF1", color: "#115E59" },
]

const Avatar = () => {
  const avatarNames = ['AK', 'SS', 'PG', 'KK']
  const getColors = (name) =>{
    let hash =0;
    for(let i=0; i<name.length; i++){
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % avatarThemes.length;
    return avatarThemes[index]
  }
  const theme = getColors(name)
  return (
    <div className='avatar'>
      {avatarNames.map((name, index)=>{
        const theme = getColors(name);
        return(
          <div className='avatar-names' 
          style={{backgroundColor: theme.bg, color: theme.color}} 
          key={index}>{name}</div>
        )
      })}
      <div className='online'>3 online</div>
    </div>
  )
}

export default Avatar
