# Geo Components

## Typeahead

Use the geo-typeahead directive to provide a typeahead control for geo data.

```
geo-typeahead(name="country", typeahead-factory="Countries", typeahead-required, typeahead-on-select="setParentScope('service.old_carrier', 'service_country', selected)")
```

```
geo-typeahead(name="state", typeahead-factory="States", typeahead-required, typeahead-on-select="setParentScope('service.old_carrier', 'service_state', selected)")
```

### Parameters:
- typeahead-factory: Either 'Countries' or 'States'.  US, Canadian and Mexican states are currently supported.
- typeahead-required: Whether or not the form control should be required
- typeahead-on-select: A callback function when the user selects a value.  setParentScope is included and can take two or three arguments.  selected should be the last argument, as this is the value selected in the model.  The first two arguments are the parent scope model.
