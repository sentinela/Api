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
    VALUE_MUST_BE_A_NUMBER: {
      code: 'DAILY-RATE-0004',
      pt: 'O valor da diária deve ser um número!'
    },
    YEAR_IS_REQUIRED: {
      code: 'DAILY-RATE-0005',
      pt: 'É obrigatório informar o ano da diária!'
    },
    YEAR_MUST_BE_A_NUMBER: {
      code: 'DAILY-RATE-0006',
      pt: 'O ano da diária deve ser um número'
    },
    ENTITY_IS_REQUIRED: {
      code: 'DAILY-RATE-0007',
      pt: 'É obrigatório informar a entidade da diária!'
    },
    ENTITY_MUST_BE_A_STRING: {
      code: 'DAILY-RATE-0008',
      pt: 'A entidade da diária deve ser um texto!'
    }
  }
};

module.exports = resource;
