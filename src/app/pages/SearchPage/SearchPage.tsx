import {
  Grid,
  Button,
  TextField,
  Typography,
  Autocomplete
} from '@mui/material';
import { Card } from './styles';

const array = [
  {
    brand: 'Volkswagen',
    model: 'T-Cross',
    year: '2017'
  },
  {
    brand: 'Volkswagen',
    model: 'Golf',
    year: '2019'
  },
  {
    brand: 'Volkswagen',
    model: 'Voyage',
    year: '2023'
  },
];

export function SearchPage() {
  function handleFieldChange(details: any) {
    console.log(details, 'teste')
  }

  return (
    <>
      <Typography>Tabela Fipe</Typography>
      <Typography>Consulte o valor de um veículo de forma gratuita</Typography>
      <Card>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Autocomplete
              id="search"
              loadingText="Carregando"
              noOptionsText="Sem opcões"
              clearText="Excluir"
              clearOnEscape={true}
              options={array}
              getOptionLabel={(option) => option.brand || ''}
              // getOptionSelected={(_option, value) => ideaUpdate?.challenge === value}
              renderInput={(params) => <TextField {...params} label="Marca" variant="filled" />}
              loading={array.length === 0}
              // value={ideaUpdate?.challenge || null}
              onChange={(_e, _items, _options, details) => handleFieldChange(details)}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              id="search"
              loadingText="Carregando"
              noOptionsText="Sem opcões"
              clearText="Excluir"
              clearOnEscape={true}
              options={array}
              getOptionLabel={(option) => option.model || ''}
              // getOptionSelected={(_option, value) => ideaUpdate?.challenge === value}
              renderInput={(params) => <TextField {...params} label="Modelo" variant="filled" />}
              loading={array.length === 0}
              // value={ideaUpdate?.challenge || null}
              onChange={(_e, _items, _options, details) => handleFieldChange(details)}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              id="search"
              loadingText="Carregando"
              noOptionsText="Sem opcões"
              clearText="Excluir"
              clearOnEscape={true}
              options={array}
              getOptionLabel={(option) => option.year || ''}
              // getOptionSelected={(_option, value) => ideaUpdate?.challenge === value}
              renderInput={(params) => <TextField {...params} label="Ano" variant="filled" />}
              loading={array.length === 0}
              // value={ideaUpdate?.challenge || null}
              onChange={(_e, _items, _options, details) => handleFieldChange(details)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              variant="contained"
              disabled
              onClick={() => console.log('Consultar preço')}
            >
              Consultar preço
            </Button>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}