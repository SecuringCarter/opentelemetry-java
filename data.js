window.BENCHMARK_DATA = {
  "lastUpdate": 1694715977633,
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
      },
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
        "date": 1694638772372,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7167.9897531907145,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8187.809050689119,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 12610.025805419102,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17239.652762338053,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 16393.077842148334,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Josh Suereth",
            "username": "jsuereth",
            "email": "Joshua.Suereth@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5c1bd6cbfe8c8316355ac2db2af86961c14fcd2f",
          "message": "Add adaptable circular buffer implementation for ExponentialCounter. (#4087)\n\n* Add adaptable circular buffer implementation for ExponentialCounter and expose hooks to test its use in Exponential Histogram aggregator.\r\n\r\n* Clean up some adapting circular buffer code.\r\n\r\n* Fix style issues.\r\n\r\n* Apply spotless.\r\n\r\n* Add tests for adapting integer array.\r\n\r\n* Finish wiring ability to remember previous integer cell size and expand testing.\r\n\r\n* Update array copy from code review.\r\n\r\n* Fixes/cleanups from review.\r\n\r\n- Fix a bug in equality where it was forcing ExponentialCounter to have\r\n  the same offset, even if it had stored 0 counts in all buckets. This\r\n  interacts negatively with merge/diff tests where creating a fresh\r\n  exponential bucket would have different indexStart then diff-ing\r\n  another.\r\n- Modify default exponential bucket counter to be adapting circular\r\n  buffer.\r\n- Remove some not-well-though-out methods (like zeroOf, zeroFrom) in\r\n  favor of a \"clear\" method on ExponentialCounter\r\n- Modify ExponentialBucketStrategy to be an actual implementation.\r\n\r\n* Improve testing of copy behavior across exponential-counter implementations.\r\n\r\n* Last fix/cleanup for PR.  Remove remaining TODO around preserving runtime optimisations.\r\n\r\n* Fixes from review.\r\n\r\n* Add test to ensure 0 is returned from exponential counters outside popualted range.\r\n\r\n* Add a bunch of extra equality tests.\r\n\r\n* run spotless.\r\n\r\n* Add note about equality.\r\n\r\n* Add copy() method to AdaptingIntegerArray, update tests.\r\n\r\n* Fix checkstyle.\r\n\r\n* Add internal disclaimer, reduce visibility of test classes\r\n\r\nCo-authored-by: jack-berg <jberg@newrelic.com>",
          "timestamp": "2022-02-04T17:21:04Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-java/commit/5c1bd6cbfe8c8316355ac2db2af86961c14fcd2f"
        },
        "date": 1694715235998,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7071.75537742428,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8401.959792024094,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 12433.497385921506,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 16893.339743015276,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 14793.083396126423,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "anuraaga@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "89675582a173dc2df2aa43040decdb2a43ee0989",
          "message": "Use custom resource to avoid version number in assertion string. (#4065)",
          "timestamp": "2022-01-07T05:32:47Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-java/commit/89675582a173dc2df2aa43040decdb2a43ee0989"
        },
        "date": 1694715492127,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7123.969153048146,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8679.572764768525,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 11276.259082638055,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17010.449235840933,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 13629.574209669901,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jack-berg",
            "username": "jack-berg",
            "email": "34418638+jack-berg@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3938d96ce253ed42c2f4a7768c36cb5269acc128",
          "message": "Manual cherrypick for commits 8bbb0e25da6bc8663cbff9ae5975ca20ba229100, b2873186e322d1f3d03d0241aa7a9d160fed4782 (#4104)",
          "timestamp": "2022-01-21T14:35:29Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-java/commit/3938d96ce253ed42c2f4a7768c36cb5269acc128"
        },
        "date": 1694715692595,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7136.49123091356,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8665.065721206516,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13457.488615991513,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 18121.483686767915,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 13788.126416222012,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "anuraaga@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cb80383df8a3fef56bcffcc011cfc50ff14d6468",
          "message": "Extract SummaryData interface for DoubleSummaryData (#4224)\n\n* Extract SummaryData interface for DoubleSummaryData\r\n\r\n* ValueAtQuantile too\r\n\r\n* javadoc",
          "timestamp": "2022-03-04T08:20:21Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-java/commit/cb80383df8a3fef56bcffcc011cfc50ff14d6468"
        },
        "date": 1694715976786,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7101.5587806270105,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8620.257952246298,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 11496.687950436473,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17025.840963470324,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 16433.773857902408,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          }
        ]
      }
    ]
  }
}