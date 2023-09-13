window.BENCHMARK_DATA = {
  "lastUpdate": 1694636906998,
  "repoUrl": "https://github.com/SecuringCarter/opentelemetry-java",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Tyler Benson",
            "username": "tylerbenson",
            "email": "tylerbenson@gmail.com"
          },
          "committer": {
            "name": "Tyler Benson",
            "username": "tylerbenson",
            "email": "tylerbenson@gmail.com"
          },
          "id": "3fe09ab7d91a31ed90ac6e8612e3c2b06cdf91f3",
          "message": "Add Benchmark script",
          "timestamp": "2023-09-13T20:02:08Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-java/commit/3fe09ab7d91a31ed90ac6e8612e3c2b06cdf91f3"
        },
        "date": 1694636905898,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 6987.216526353894,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8444.406071263433,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 11295.830141617183,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17661.80204138024,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 15318.554588374818,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          }
        ]
      }
    ]
  }
}