window.BENCHMARK_DATA = {
  "lastUpdate": 1694638239168,
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
          "id": "bb8e5a7ed7f0080b39851a6c4575355f60c59560",
          "message": "Add Benchmark script",
          "timestamp": "2023-09-13T20:02:08Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-java/commit/bb8e5a7ed7f0080b39851a6c4575355f60c59560"
        },
        "date": 1694638238328,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7007.166537098578,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8453.114325686369,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 11991.866899392178,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17261.212657614302,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 16225.105974147871,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          }
        ]
      }
    ]
  }
}