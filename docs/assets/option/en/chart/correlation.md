{{ target: chart-correlation }}

# correlationChart

Correlation Chart

{{ use: common-chart-spec(
    prefix = '#',
    chartType = 'correlation'
) }}

{{ use: series-correlation(
  prefix = '#',
  noType = true,
  noData = true,
  noMorph = true,
  useInChart = true
) }}

{{ use: chart-component(
  axisType = 'polar',
  isPolar = true
) }}