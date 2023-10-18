import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    logo: {
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '10% 0',
        textDecoration: 'none',
        color: 'white'
    },
    image: {
        // width: '70%',
        margin: '10px 2px 10px 10px',
        padding: 'auto',
    },
    links: {
        // color: theme.palette.text.primary,
        textDecoration: 'none',
        color: 'white',
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '10px 10px',
        padding: '5% 0',
    },
    images: {
        filter: 'invert(1)',
        margin: 'auto'
    },
    userCard: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1),
        border: '1px solid white',
        borderRadius: '8px',
        marginTop: theme.spacing(33),
        marginBottom: theme.spacing(2),
        marginLeft: '5px',
        marginRight: '5px',
      },
      avatar: {
        width: '60px',
        height: '60px',
        marginRight: theme.spacing(2),
      },
      userInfo: {
        flex: 1,
      },
      userName: {
        fontWeight: 'bold',
      },
}))