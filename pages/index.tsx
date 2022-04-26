import type { NextPage } from "next";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

// Components
import { Layout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}} >
            <CardHeader title="Pendientes"></CardHeader>

            <CardContent>
            
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Progreso"></CardHeader>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Completadas"></CardHeader>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
