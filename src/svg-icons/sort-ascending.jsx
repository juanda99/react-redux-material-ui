import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/svg-icon';

let SortAscending = (props) => (
  <SvgIcon {...props}>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M10,11V13H18V11H10M10,5V7H14V5H10M10,17V19H22V17H10M6,7H8.5L5,3.5L1.5,7H4V20H6V7Z" />
  </SvgIcon>
);
SortAscending = pure(SortAscending)
SortAscending.displayName = 'SortAscending';

export default SortAscending;