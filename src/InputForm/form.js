import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';

  export const Form = props => {

    const {
      values: { firstName, middleName, lastName, address1, address2, city, stateProviceGeoId, postalCode, email },
      errors,
      touched,
      handleChange,
      isValid,
      handleSubmit,
      setFieldTouched
    } = props;
   
    const states = [


      {
        value: 'USA_AL',
        label: 'AL',
      },
      {
        value: 'USA_AK',
        label: 'AK',
      },
      {
        value: 'USA_AZ',
        label: 'AZ',
      },
      {
        value: 'USA_AR',
        label: 'AR',
      },
      {
        value: 'USA_CA',
        label: 'CA',
      },
      {
        value: 'USA_CO',
        label: 'CO',
      },
      {
        value: 'USA_CT',
        label: 'CT',
      },
      {
        value: 'USA_DE',
        label: 'DE',
      },
      {
        value: 'USA_FL',
        label: 'FL',
      },
      {
        value: 'USA_GA',
        label: 'GA',
      },
      {
        value: 'USA_HI',
        label: 'HI',
      },
      {
        value: 'USA_ID',
        label: 'ID',
      },
      {
        value: 'USA_IL',
        label: 'IL',
      },
      {
        value: 'USA_IN',
        label: 'IN',
      },
      {
        value: 'USA_IA',
        label: 'IA',
      },
      {
        value: 'USA_KS',
        label: 'KS',
      },
      {
        value: 'USA_KY',
        label: 'KY',
      },
      {
        value: 'USA_LA',
        label: 'LA',
      },
      {
        value: 'USA_ME',
        label: 'ME',
      },
      {
        value: 'USA_MD',
        label: 'MD',
      },
      {
        value: 'USA_MA',
        label: 'MA',
      },
      {
        value: 'USA_MI',
        label: 'MI',
      },
      {
        value: 'USA_MS',
        label: 'MS',
      },
      {
        value: 'USA_MO',
        label: 'MO',
      },
      {
        value: 'USA_MT',
        label: 'MT',
      },
      {
        value: 'USA_NE',
        label: 'NE',
      },
      {
        value: 'USA_NV',
        label: 'NV',
      },
      {
        value: 'USA_NH',
        label: 'NH',
      },
      {
        value: 'USA_NJ',
        label: 'NJ',
      },
      {
        value: 'USA_NM',
        label: 'NM',
      },
      {
        value: 'USA_NY',
        label: 'NY',
      },
      {
        value: 'USA_NC',
        label: 'NC',
      },
      {
        value: 'USA_ND',
        label: 'ND',
      },
      {
        value: 'USA_OH',
        label: 'OH',
      },
      {
        value: 'USA_OK',
        label: 'OK',
      },
      {
        value: 'USA_OR',
        label: 'OR',
      },
      {
        value: 'USA_PA',
        label: 'PA',
      },
      {
        value: 'USA_RI',
        label: 'RI',
      },
      {
        value: 'USA_SC',
        label: 'SC',
      },
      {
        value: 'USA_SD',
        label: 'SD',
      },
      {
        value: 'USA_TN',
        label: 'TN',
      },
      {
        value: 'USA_TX',
        label: 'TX',
      },  
      {
        value: 'USA_UT',
        label: 'UT',
      },
      {
        value: 'USA_VT',
        label: 'VT',
      },
      {
        value: 'USA_VA',
        label: 'VA',
      },
      {
        value: 'USA_WA',
        label: 'WA',
      },
      {
        value: 'USA_WV',
        label: 'WV',
      },
      {
        value: 'USA_WI',
        label: 'WI',
      },
      {
        value: 'USA_WY',
        label: 'WY',
      },
    ];
    

    const change = (name, e) => {
      e.persist();
      handleChange(e);
      setFieldTouched(name, true, false);
    };
    return (
      <div>
      <form
        onSubmit={
          handleSubmit
        } 
      >
      <Tooltip title="First Name" placement="bottom">
        <TextField
          required
          id="standard-required"
          name="firstName"
          label="First name"
          placeholder="ex. John"
          value={firstName}
          onChange={change.bind(null, "firstName")} 
          helperText={touched.firstName ? errors.firstName : ""}
          error={touched.firstName && Boolean(errors.firstName)}
          margin="normal"
          variant="outlined"
        />
        </Tooltip>
        <Tooltip title="Middle Initial" placement="bottom">
       <TextField
          id="standard"
          name="middleName"
          label="MI"
          placeholder="ex. M"
          value={middleName}
          onChange={change.bind(null, "middleName")} 
          helperText={touched.middleName ? errors.middleName : ""}
          error={touched.middleName && Boolean(errors.middleName)}
          margin="normal"
          padding="0"
          variant="outlined"
        />
        </Tooltip>
        <Tooltip title="Last Name" placement="bottom">
       <TextField
          required
          id="standard-required"
          name="lastName"
          label="Last name"
          placeholder="ex. Doe"
          value={lastName}
          onChange={change.bind(null, "lastName")} 
          helperText={touched.lastName ? errors.lastName : ""}
          error={touched.lastName && Boolean(errors.lastName)}
          margin="normal"
          variant="outlined"
        />
       </Tooltip>
       <Tooltip title="Street Address" placement="bottom">
       <TextField
          required
          id="standard-required"
          name="address1"
          label="Street Address"
          placeholder="ex. 123 Ikea Avenue"
          value={address1}
          onChange={change.bind(null, "address1")} 
          helperText={touched.address1 ? errors.address1 : ""}
          error={touched.address1&& Boolean(errors.address1)}
          margin="normal"
          variant="outlined"
        />
        </Tooltip>

        <Tooltip title="Unit/Apt. #" placement="bottom">
        <TextField
          id="standard"
          name="address2"
          label="Unit/Apt. #"
          value={address2}
          onChange={change.bind(null, "address2")} 
          helperText={touched.address2 ? errors.address2 : ""}
          error={touched.address2 && Boolean(errors.address2)}
          margin="normal"
          variant="outlined"
        />
        </Tooltip>
        <Tooltip title="City" placement="bottom">
       <TextField
          required
          id="standard-required"
          name="city"
          label="City"
          value={city}
          onChange={change.bind(null, "city")} 
          helperText={touched.city ? errors.city : ""}
          error={touched.city && Boolean(errors.city)}
          margin="normal"
          variant="outlined"
        />
        </Tooltip>
        <Tooltip title="State" placement="bottom">
        <TextField
          required
          id="standard-select-state"
          select
          name="stateProviceGeoId"
          label="State"
          value={stateProviceGeoId}
          onChange={change.bind(null, "stateProviceGeoId")} 
          helperText={touched.stateProviceGeoId ? errors.stateProviceGeoId : ""}
          error={touched.stateProviceGeoId && Boolean(errors.stateProviceGeoId)}
          SelectProps={{
            MenuProps: {
              // className: classes.menu,
            },
          }}
          margin="normal"
          variant="outlined"
        >
          {states.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Tooltip>
        <Tooltip title="Postal Code" placement="bottom">
       <TextField
          required
          id="standard-required"
          name="postalCode"
          label="Postal Code"
          placeholder="ex. 55555"
          value={postalCode}
          onChange={change.bind(null, "postalCode")} 
          helperText={touched.postalCode ? errors.postalCode : ""}
          error={touched.postalCode && Boolean(errors.postalCode)}
          margin="normal"
          variant="outlined"
        />
        </Tooltip>
        <Tooltip title="Email" placement="bottom">
        <TextField
          required
          id="standard-email-input"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={change.bind(null, "email")} 
          helperText={touched.email ? errors.email : ""}
          error={touched.email && Boolean(errors.email)}
          autoComplete="email"
          placeholder="ex. hi@email.com"
          margin="normal"
          variant="outlined"
        />
        </Tooltip>

        <Button  disabled={!isValid} className="button" size="medium" type="submit" style={{borderRadius: 5, backgroundColor: `#112E5C`, fontSize: 14, margin: 30, color: `white`, height: 50, width: 190, paddingTop:0}}><span>Add Customer Information</span></Button>
      </form>
      </div>
    );
   };
   