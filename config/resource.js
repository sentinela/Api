const resource = {
  dailyRate: {
    DAILY_RATE_IS_REQUIRED: {
      code: 'DAILY-RATE-0001',
      pt: 'É obrigatório informar a diária!'
    },
    DAILY_MUST_BE_AN_OBJECT: {
      code: 'DAILY-RATE-0002',
      pt: 'A diária deve ser um objeto!'
    },
    VALUE_IS_REQUIRED: {
      code: 'DAILY-RATE-0003',
      pt: 'O valor da diária é obrigatório!'
    },
    VALUE_MUST_BE_A_NUMBER_BIGGER_THAN_ZERO: {
      code: 'DAILY-RATE-0004',
      pt: 'O valor da diária deve ser um número maior que zero!'
    },
    IBGE_CODE_IS_REQUIRED: {
      code: 'DAILY-RATE-0005',
      pt: 'O código da cidade (Código IBGE) é obrigatório!'
    },
    IBGE_CODE_MUST_BE_AN_INTEGER_BIGGER_THAN_ZERO: {
      code: 'DAILY-RATE-0006',
      pt: 'O código da cidade (Código IBGE) deve ser um número inteiro maior que zero!'
    },
    ID_IS_REQUIRED: {
      code: 'DAILY-RATE-0007',
      pt: 'O identificador da diária é obrigatório!'
    },
    ID_MUST_BE_AN_INTEGER_BIGGER_THAN_ZERO: {
      code: 'DAILY-RATE-0008',
      pt: 'O identificador da diária deve ser um número inteiro maior que zero!'
    },
    YEAR_IS_REQUIRED: {
      code: 'DAILY-RATE-0009',
      pt: 'É obrigatório informar o ano da diária!'
    },
    YEAR_MUST_BE_AN_INTEGER_BIGGER_THAN_1900: {
      code: 'DAILY-RATE-0010',
      pt: 'O ano da diária deve ser um número inteiro maior que 1900!'
    },
    CITY_IS_REQUIRED: {
      code: 'DAILY-RATE-0011',
      pt: 'É obrigatório informar a cidade da diária!'
    },
    CITY_MUST_BE_A_STRING: {
      code: 'DAILY-RATE-0012',
      pt: 'A cidade da diária deve ser um texto!'
    },
    ALREADY_EXIST_A_DAILY_RATE_WITH_THIS_ID_AND_IBGE_CODE: {
      code: 'DAILY-RATE-0013',
      pt: 'A entidade da diária deve ser um texto!'
    },
    HISTORY_IS_REQUIRED: {
      code: 'DAILY-RATE-0014',
      // todo: O que seria 'history' nesse contexto?
      pt: 'É obrigatório informar a history da diária!'
    },
    HISTORY_MUST_BE_A_STRING: {
      code: 'DAILY-RATE-0015',
      // todo: O que seria 'history' nesse contexto?
      pt: 'A history da diária deve ser um texto!'
    },
    LAUNCH_DATE_IS_REQUIRED: {
      code: 'DAILY-RATE-0016',
      pt: 'É obrigatório informar a data da diária!'
    },
    LAUNCH_DATE_MUST_BE_A_DATE: {
      code: 'DAILY-RATE-0017',
      pt: 'A data da diária deve ser uma data!'
    },
    BENEFITED_IS_REQUIRED: {
      code: 'DAILY-RATE-0018',
      pt: 'É obrigatório informar o credor da diária!'
    },
    BENEFITED_MUST_BE_A_STRING: {
      code: 'DAILY-RATE-0019',
      pt: 'O credor da diária deve ser um texto!'
    },
    ROLE_IS_REQUIRED: {
      code: 'DAILY-RATE-0020',
      pt: 'É obrigatório informar o cargo da diária!'
    },
    ROLE_MUST_BE_A_STRING: {
      code: 'DAILY-RATE-0021',
      pt: 'O cargo da diária deve ser um texto!'
    },
    EMPENHO_IS_REQUIRED: {
      code: 'DAILY-RATE-0022',
      pt: 'É obrigatório informar o empenho da diária!'
    },
    EMPENHO_MUST_BE_A_STRING: {
      code: 'DAILY-RATE-0023',
      pt: 'O empenho da diária deve ser um texto!'
    }
  }
};

module.exports = resource;
