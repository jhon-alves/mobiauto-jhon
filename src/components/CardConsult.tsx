import {
  Grid,
  Button,
  TextField,
  Autocomplete,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { Card } from './styles';
import { vehiclesActions } from '@/actions/vehicles.actions';
import { useAppDispatch, useAppSelector } from '@/helpers/store';

interface IFipeApi {
  codigo: string;
  nome: string;
}

interface IConsult {
  brands: IFipeApi[];
  models: IFipeApi[];
  years: IFipeApi[];
}

export default function CardConsult({ brands, models, years }: IConsult) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { filters, typeVehicle } = useAppSelector(state => state.vehicles);

  function handleVehicleFieldChange(e: any) {
    const { name, value } = e.target;
    dispatch(vehiclesActions.changeVehicle(name, value));
  }

  function handleBrandFieldChange(details: any) {
    const { codigo, nome } = details.option;
    dispatch(vehiclesActions.changeField('brand', codigo, nome ));
  }

  function handleModelFieldChange(details: any) {
    const { codigo, nome } = details.option;
    dispatch(vehiclesActions.changeField('model', codigo, nome ));
  }

  function handleYearFieldChange(details: any) {
    const { codigo, nome } = details.option;
    dispatch(vehiclesActions.changeField('year', codigo, nome ));
  }

  return (
    <Card>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl>
            <RadioGroup
              row
              name="typeVehicle"
              value={typeVehicle}
              onChange={handleVehicleFieldChange}
            >
              <FormControlLabel
                value="carros"
                control={<Radio />}
                label="Carros"
              />
              <FormControlLabel
                value="motos"
                control={<Radio />}
                label="Motos"
              />
              <FormControlLabel
                value="caminhoes"
                control={<Radio />}
                label="Caminhões"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            loadingText="Carregando"
            noOptionsText="Sem opcões"
            clearText="Excluir"
            clearOnEscape={true}
            disableClearable={true}
            options={brands}
            getOptionLabel={(option) => option.nome || ''}
            isOptionEqualToValue={(_option, value) => filters.brand.codigo === value.codigo}
            renderInput={(params) => <TextField {...params} label="Marca" variant="outlined" />}
            loading={brands?.length === 0}
            value={filters.brand}
            onChange={(_e, _items, _options, details) => handleBrandFieldChange(details)}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            loadingText="Carregando"
            noOptionsText="Sem opcões"
            clearText="Excluir"
            clearOnEscape={true}
            disableClearable={true}
            options={models}
            getOptionLabel={(option) => option.nome || ''}
            isOptionEqualToValue={(_option, value) => filters.model.codigo === value.codigo}
            renderInput={(params) => <TextField {...params} label="Modelo" variant="outlined" />}
            loading={models.length === 0}
            value={filters.model}
            onChange={(_e, _items, _options, details) => handleModelFieldChange(details)}
          />
        </Grid>
        {filters.model.nome.length > 0 && (
          <Grid item xs={12}>
            <Autocomplete
              loadingText="Carregando"
              noOptionsText="Sem opcões"
              clearText="Excluir"
              clearOnEscape={true}
              disableClearable={true}
              options={years}
              getOptionLabel={(option) => option.nome || ''}
              isOptionEqualToValue={(_option, value) => filters.year.codigo === value.codigo}
              renderInput={(params) => <TextField {...params} label="Ano" variant="outlined" />}
              loading={years.length === 0}
              value={filters.year}
              onChange={(_e, _items, _options, details) => handleYearFieldChange(details)}
            />
          </Grid>
        )}
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            disabled={
              !(filters.brand.nome.length > 0 && 
                filters.model.nome.length > 0 &&
                filters.year.nome.length > 0)
            }
            color="primary"
            variant="contained"
            onClick={() => router.push('/result')}
          >
            Consultar preço
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}