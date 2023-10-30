window.BENCHMARK_DATA = {
  "lastUpdate": 1698697682783,
  "repoUrl": "https://github.com/SecuringCarter/opentelemetry-java",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tylerbenson@gmail.com",
            "name": "Tyler Benson",
            "username": "tylerbenson"
          },
          "committer": {
            "email": "tylerbenson@gmail.com",
            "name": "Tyler Benson",
            "username": "tylerbenson"
          },
          "distinct": true,
          "id": "9f626bf585fd8c97e6e52eb1e838f6f45dd752cb",
          "message": "Add SBOM action to build/release process.",
          "timestamp": "2023-10-30T15:35:21-04:00",
          "tree_id": "8a76923de4e1613b26b16c19f663b4417ec8a232",
          "url": "https://github.com/SecuringCarter/opentelemetry-java/commit/9f626bf585fd8c97e6e52eb1e838f6f45dd752cb"
        },
        "date": 1698694894226,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7047.849682732614,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8356.271218635433,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13184.20378083798,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17121.970742668265,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 13751.49139244158,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1678522.6935124188,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8537.393625839675,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tylerbenson@gmail.com",
            "name": "Tyler Benson",
            "username": "tylerbenson"
          },
          "committer": {
            "email": "tylerbenson@gmail.com",
            "name": "Tyler Benson",
            "username": "tylerbenson"
          },
          "distinct": true,
          "id": "3574088f55ddde5a575724539ecfb929eabb92a3",
          "message": "Add SBOM action to build/release process.",
          "timestamp": "2023-10-30T16:17:05-04:00",
          "tree_id": "e866d1e87c5515f4632fa2e2df035a37b1227956",
          "url": "https://github.com/SecuringCarter/opentelemetry-java/commit/3574088f55ddde5a575724539ecfb929eabb92a3"
        },
        "date": 1698697243725,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7140.919983417708,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8226.392973326025,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 12868.390383353457,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17565.610440006778,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 14517.390565014652,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1688299.8978007273,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8613.22192087967,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tylerbenson@gmail.com",
            "name": "Tyler Benson",
            "username": "tylerbenson"
          },
          "committer": {
            "email": "tylerbenson@gmail.com",
            "name": "Tyler Benson",
            "username": "tylerbenson"
          },
          "distinct": true,
          "id": "a06f6f3bf111c94fb787862bc7d6598524808ae9",
          "message": "Add SBOM action to build/release process.",
          "timestamp": "2023-10-30T16:24:25-04:00",
          "tree_id": "04408018b7ea440632276298bab75c5a5d7d3614",
          "url": "https://github.com/SecuringCarter/opentelemetry-java/commit/a06f6f3bf111c94fb787862bc7d6598524808ae9"
        },
        "date": 1698697681981,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7060.026753804338,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8719.625082673501,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13259.704278865316,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 18266.941262482338,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 16480.845494453308,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1686581.0116070837,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8637.191326470533,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}