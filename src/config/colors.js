export const TAG_COLORS = {  
    //couleurs des tags
  all:          '#db0000',
  house:        '#671665',
  energy:       '#a01b59',
  jazz:         '#ed3e40',
  jazz_light:   '#f9c1c2',
  chill:        '#f48c45',
  lofi:         '#ddc15b',
  peace:        '#8fcd6e',
  ambient:      '#52c777',
  ost:          '#0a7d5f',
  games:        '#0d5154',
  nintendo:     '#19334a',
  japan:        '#1d1739',
  wtf:          '#151740',
  french:       '#04276e'
};

// Fonction pour obtenir les couleurs d'un tag
export const getTagColor = (tagName) => {
  const normalizedTag = tagName.toLowerCase();
  return TAG_COLORS[normalizedTag] || TAG_COLORS.all;
};