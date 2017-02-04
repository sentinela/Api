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
      pt: 'É obrigatório informar a entidade da diária!'
    },
    CITY_MUST_BE_A_STRING: {
      code: 'DAILY-RATE-0012',
      pt: 'A entidade da diária deve ser um texto!'
    },
    ALREADY_EXIST_A_DAILY_RATE_WITH_THIS_ID_AND_IBGE_CODE: {
      code: 'DAILY-RATE-0013',
      pt: 'A entidade da diária deve ser um texto!'
    }
  }
};

module.exports = resource;
