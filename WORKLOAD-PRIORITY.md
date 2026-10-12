# Workload priority

Source manifests reference the owner-approved PriorityClasses installed by f-operator v0.3.0. The central operator release workflow applies this same policy through GitHub, including graceful ordered application/database suspension and recovery. This is a priority-only source synchronization; application image versions and code remain unchanged. Existing application image pipelines are deliberately not rerun for this synchronization. Future application releases retain the priority in these manifests.

Policy and validation: https://github.com/FabioKaelin/f-operator/tree/main/pressure .
