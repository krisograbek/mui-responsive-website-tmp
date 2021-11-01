import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(({
  item: {
    paddingTop: 64,
  }
}));

function Blog() {
  const { item } = useStyles();
  return (
    <Grid id="blog" container>
      <Grid item
        className={item}
      >
        <Typography variant="h4" component="h2">
          Blog
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          Vestibulum eget finibus augue, vel gravida neque. Nulla elementum mauris et tempor facilisis. Morbi leo metus, mollis eget quam non, luctus pulvinar lorem. Phasellus sodales, odio id hendrerit sodales, magna dolor finibus enim, et iaculis velit magna ut sem. Nunc varius laoreet libero, vel fringilla enim. In dapibus sapien nulla, sed pellentesque nisl hendrerit sed. Curabitur eu arcu ac massa dignissim aliquet. Nullam sit amet orci libero.

          Praesent malesuada iaculis est nec tincidunt. Vestibulum faucibus tellus ut ipsum facilisis malesuada. Integer vehicula sapien nec massa pellentesque consequat. In pretium mauris vitae porttitor venenatis. Morbi eget diam sit amet nisi elementum accumsan consequat et nulla. Cras turpis odio, tristique id nisi in, pretium tempus ex. Integer lobortis interdum erat ut mattis. Suspendisse mauris leo, sollicitudin ut erat eu, facilisis malesuada erat. Duis vehicula lobortis eros, eu finibus orci placerat id. Aliquam ultrices eros libero, ac hendrerit nibh dictum vitae. Fusce auctor quis est eu maximus. Nam et tincidunt arcu. Cras vitae egestas neque, eget viverra lectus. Nulla et molestie augue, quis cursus augue.

          Suspendisse feugiat, turpis in cursus luctus, ipsum nibh mollis erat, porta commodo urna tellus id metus. Sed nec neque blandit, suscipit mauris sed, consectetur risus. Ut lectus orci, malesuada a dolor non, dignissim finibus lorem. Etiam facilisis molestie elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi id finibus tellus. Nunc nec mauris sed lectus volutpat condimentum. In dolor felis, interdum consequat tempor vitae, sollicitudin quis massa. Duis arcu nibh, laoreet sit amet arcu sed, pretium mollis nisi. Fusce luctus orci ac felis viverra, in fermentum metus dignissim. Vivamus dui ipsum, luctus eu lacus id, iaculis dignissim sem. Duis at felis mi. Vivamus quis scelerisque erat, sed tincidunt nisi. Suspendisse tempor ex ultrices neque finibus, ut sagittis lectus pretium. Duis et nisi sit amet turpis sollicitudin dapibus a vitae urna.

          Ut vel mauris eu turpis molestie congue quis in felis. Integer ipsum nibh, malesuada sit amet sodales sit amet, ultrices et libero. Curabitur tempus turpis in ex facilisis placerat. Mauris sed ex est. Nunc interdum sodales faucibus. Sed non scelerisque tellus, ac rutrum magna. Integer massa lacus, pharetra in urna in, sollicitudin ornare lacus. Sed vel sollicitudin mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer ultricies quam ac felis tristique, id vehicula nulla finibus. Duis laoreet at diam eget blandit. Quisque in dapibus felis. Nam ut dolor libero.

          Cras at velit aliquet, rhoncus mauris vitae, mollis odio. Maecenas volutpat, nisi malesuada interdum congue, ipsum metus sodales risus, vestibulum viverra erat quam quis massa. Nullam ac maximus mauris. Ut tincidunt sapien eros, quis laoreet felis ornare eu. Etiam interdum dolor leo, id tincidunt metus auctor sagittis. Fusce accumsan aliquet convallis. Nulla ornare quam id leo bibendum, eu lobortis nibh maximus. Pellentesque at ullamcorper urna. Maecenas accumsan facilisis nibh, id condimentum mauris venenatis vitae.

          Maecenas iaculis odio quis lacus molestie, eget varius urna fermentum. Quisque nec aliquet libero. Proin gravida sed ligula vel lacinia. Nunc quis mi non massa facilisis pretium at at est. Nulla porttitor et ipsum sit amet interdum. Maecenas ullamcorper egestas aliquet. Vestibulum rutrum, libero eu laoreet dapibus, enim nisi blandit nisl, eget rhoncus ex enim vel libero. Proin pharetra risus id lacus condimentum tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus libero dolor, eleifend eu pellentesque ut, mollis non magna. Aliquam varius nibh id dui volutpat vestibulum.

          Donec interdum sapien ac nisl euismod volutpat. Aenean eget dui at nibh dignissim finibus ac id mauris. In dolor dui, pretium vel interdum eu, posuere at enim. Pellentesque volutpat purus eget interdum pulvinar. Aliquam vitae sem at neque mollis viverra ut ut dui. Quisque varius ut massa a eleifend. Morbi egestas metus eu felis sodales, eget aliquam diam maximus.

          Quisque arcu tortor, finibus ut odio at, ultrices euismod risus. In ac interdum est. Morbi ultrices ipsum posuere turpis luctus convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque risus neque, tristique non commodo in, maximus sed ex. Etiam id eros vehicula, finibus tellus non, bibendum dui. Integer elementum non justo quis gravida. Nunc non sodales nulla. Pellentesque augue risus, molestie hendrerit sollicitudin nec, pretium ac tellus. Ut ultrices vulputate fringilla. Ut sollicitudin est eu leo auctor, eu blandit odio bibendum. Nulla sit amet purus lacus.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Blog
