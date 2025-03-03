---
sidebar_position: 2
title: GRID CLI REFERENCE
sidebar_label: GRID CLI REFERENCE
---


Grid CLI

**Usage:**

```
grid [OPTIONS] COMMAND [ARGS]...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--debug` | boolean | Used for logging additional information for debugging purposes. | `False` |
| `-o`, `--output` | choice (`console` &#x7C; `json`) | Output format | `console` |
| `--help` | boolean | Show this message and exit. | `False` |

### grid artifacts

Downloads artifacts for a given run or experiments.

This will download every artifact generated by the run / experiment.
At the moment, there is no way to specify individual files or directories
which should be downloaded.

**Usage:**

```
grid artifacts [OPTIONS] RUNS_OR_EXPERIMENTS...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--download_dir` | directory | Download directory that will host all artifact files. | `./grid_artifacts` |
| `--help` | boolean | Show this message and exit. | `False` |

### grid clusters

**Usage:**

```
grid clusters [OPTIONS] COMMAND [ARGS]...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### aws

Create a grid compute cluster with NAME from the provided AWS account details.

**Usage:**

```
grid clusters aws [OPTIONS] NAME
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--external-id` | text | N/A |  |
| `--role-arn` | text | AWS role ARN attached to`the associated resources. |  |
| `--region` | text | AWS region which is used to host the associated resources. | `us-east-1` |
| `--instance-types` | text | Instance types which you desire to support for computer jobs within the cluster. | `g2.8xlarge, g3.16xlarge, g3.4xlarge, g3.8xlarge, g3s.xlarge, g4dn.12xlarge, g4dn.16xlarge, g4dn.2xlarge, g4dn.4xlarge, g4dn.8xlarge, g4dn.metal, g4dn.xlarge, p2.16xlarge, p2.8xlarge, p2.xlarge, p3.16xlarge, p3.2xlarge, p3.8xlarge, p3dn.24xlarge, t2.large, t2.medium, t2.xlarge, t2.2xlarge, t3.large, t3.medium, t3.xlarge, t3.2xlarge` |
| `--cost-savings` | boolean | using this flag ensures that the cluster is created with a profile that is optimized for cost saving, making runs cheaper but start-up times may increase | `False` |
| `--edit-before-creation` | boolean | Edit the created cluster spec before submitting to API server. | `False` |
| `--help` | boolean | Show this message and exit. | `False` |

#### logs

Retrieve cluster logs from the managed cluster identified by CLUSTER_ID.

These logs are streamed to stdout, and can either be tailed to view log
lines as they are generated, or limited to a time range.

**Usage:**

```
grid clusters logs [OPTIONS] CLUSTER_ID
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `-t`, `--tail` | boolean | whether to tail log lines | `False` |
| `--from` | text | The starting timestamp to query cluster logs from. | `24 hours ago` |
| `--to` | text | The end timestamp / relative time increment to query logs for. This is ignored when tailing logs. | `0 seconds ago` |
| `--limit` | integer | The max number of log lines returned. | `1000` |
| `--time-format` | choice (`human` &#x7C; `iso8601`) | Timestamp formatting style | `iso8601` |
| `--help` | boolean | Show this message and exit. | `False` |

### grid credentials

Manages credentials.

**Usage:**

```
grid credentials [OPTIONS] COMMAND [ARGS]...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--set_default` | text | Credential set to make default. | None |
| `--help` | boolean | Show this message and exit. | `False` |

#### add

Adds user credentials to access Grid.

**Usage:**

```
grid credentials add [OPTIONS]
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--provider` | choice (`aws`) | Credential provider. |  |
| `--file` | filename | JSON file to where credentials are |  |
| `--alias` | text | Given name for a credential set | None |
| `--description` | text | Description for a credential set | None |
| `--help` | boolean | Show this message and exit. | `False` |

### grid datastore

Manages Datastore workflows.

**Usage:**

```
grid datastore [OPTIONS] COMMAND [ARGS]...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--global` | boolean | Fetch sessions from everyone in the team when flag is passed | `False` |
| `--help` | boolean | Show this message and exit. | `False` |

#### clearcache

Clears datastore cache which is saved on the local machine when uploading a datastore to grid.

This removes all the cached files from the local machine, meaning that resuming an incomplete
upload is not possible after running this command.

**Usage:**

```
grid datastore clearcache [OPTIONS]
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### create

Creates a datastore and begins the process of uploading files.
The upload session is referenced by the SESSION_NAME. this SESSION_NAME
must be used to resume the upload if it is interupted.

**Usage:**

```
grid datastore create [OPTIONS]
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--source` | text | Source to create datastore from. This could either be a local directory (e.g: /opt/local_folder) or a remote HTTP URL pointing to a TAR file (e.g: http://some_domain/data.tar.gz). |  |
| `--name` | text | Name of the datastore | None |
| `--compression` | boolean | Compresses datastores with GZIP when flag is passed. | `False` |
| `--cluster` | text | cluster id to create the datastore on. (Bring Your Own Cloud Customers Only). | None |
| `--help` | boolean | Show this message and exit. | `False` |

#### delete

Deletes a datastore with the given name and version tag.

For bring-your-own-cloud customers, the cluster id of the associated
resource is required as well.

**Usage:**

```
grid datastore delete [OPTIONS]
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--name` | text | Name of the datastore |  |
| `--version` | integer | Version of the datastore |  |
| `--cluster` | text | cluster id to delete the datastore from. (Bring Your Own Cloud Customers Only). | None |
| `--help` | boolean | Show this message and exit. | `False` |

#### resume

Resume uploading a datastore. SESSION_NAME identifies the datastore upload session to resume.

The SESSION_NAME argument is displayed which starting (or resuming) an upload.

**Usage:**

```
grid datastore resume [OPTIONS] SESSION_NAME
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

### grid delete

Allows you to delete grid resources.

**Usage:**

```
grid delete [OPTIONS] COMMAND [ARGS]...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### cluster

Delete CLUSTER and all associated AWS resources.

Deleting a run also deletes all Runs and Experiments which were started
on the cluster. deletion permanently removes not only the record of all
runs on a cluster, but all associated experiments, artifacts, metrics, logs, etc.

This process may take a few minutes to complete, but once started is irriversable.
Deletion permanently removes not only cluster from being managed by grid, but tears
down every resource grid managed (for that cluster id) in the host cloud. All object
stores, container registries, logs, compute nodes, volumes, etc. are deleted and
cannot be recovered.

**Usage:**

```
grid delete cluster [OPTIONS] CLUSTER
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--force` | boolean | Force delete cluster from grid system. This does NOT delete any resources created by the cluster, just cleaning up the entry from the grid system. You should not use this under normal circumstances | `False` |
| `--help` | boolean | Show this message and exit. | `False` |

#### experiment

Delete some set of EXPERIMENT_NAMES from grid.

This process is immediate and irreversible, deletion permanently removes not only
the record of the experiment, but all associated artifacts, metrics, logs, etc.

**Usage:**

```
grid delete experiment [OPTIONS] EXPERIMENT_NAMES...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### run

Delete some set of RUN_NAMES from grid.

Deleting a run also deletes all experiments contained within the run.

This process is immediate and irreversible, deletion permanently removes not only
the record of the run, but all associated experiments, artifacts, metrics, logs, etc.

**Usage:**

```
grid delete run [OPTIONS] RUN_NAMES...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

### grid docs

Open the CLI docs.

**Usage:**

```
grid docs [OPTIONS]
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

### grid edit

Edits a resource

**Usage:**

```
grid edit [OPTIONS] COMMAND [ARGS]...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### cluster

Edit existing cluster

**Usage:**

```
grid edit cluster [OPTIONS] CLUSTER
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

### grid history

View list of historic Runs.

**Usage:**

```
grid history [OPTIONS]
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--global` | boolean | Fetch history from everyone in the team when flag is passed | `False` |
| `--help` | boolean | Show this message and exit. | `False` |

### grid instance-types

List the compute node instance types which are available for computation.

For bring your own cloud customers, the instance types available are
defined by the organizational administrators who created the cluster.

**Usage:**

```
grid instance-types [OPTIONS]
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--cluster` | text | Cluster ID whence the instance types needs to be fetched. (Bring Your Own Cloud Customers Only). | `prod-2` |
| `--help` | boolean | Show this message and exit. | `False` |

### grid login

Authorize the CLI to access Grid AI resources for a particular user.

If no username or key is provided, the CLI will prompt for them. After
providing your username, a web browser will open to your account settings
page where your API key can be found.

**Usage:**

```
grid login [OPTIONS]
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--key` | text | API Key from Grid | None |
| `--username` | text | Username used in Grid | None |
| `--help` | boolean | Show this message and exit. | `False` |

### grid logs

Shows stdout logs associated with some EXPERIMENT.

This includes both build and experiment logs.

**Usage:**

```
grid logs [OPTIONS] EXPERIMENT
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--show-build-logs` | boolean | Shows build logs if not shown by default. | None |
| `-l`, `--tail-lines` | integer | Number of lines to show from the end. | None |
| `--help` | boolean | Show this message and exit. | `False` |

### grid run

Launch a Run from some SCRIPT with the provided SCRIPT_ARGS.

A run is a collection of experiments which run with a single set of SCRIPT_ARGS. The
SCRIPT_ARGS passed to the run command can represent fixed values, or a set of values
to be searched over for each option. If a set of values are passed, a sweep (grid-search
or random-search) will be performed, launching the desired number of experiments in
parallel - each with a unique set of input arguments.

The script runs on the specified instance type and Grid collects the generated
artifacts, metrics, and logs; making them available for you to view in real time
(or later if so desired) on either our Web UI or via this CLI.

**Usage:**

```
grid run [OPTIONS] [RUN_COMMAND]...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--config` | Path | Path to Grid config YML. | None |
| `--name` | text | Name for this run | None |
| `--description` | text | Run description; useful for note-keeping | None |
| `--cluster` | text | N/A | `prod-2` |
| `--strategy` | choice (`grid_search` &#x7C; `random_search`) | Hyper-parameter search strategy | None |
| `--num_trials` | integer | Number of samples from full search space that are used by the random_search strategy | None |
| `--seed` | integer | Seed value for the `random_search` strategy | None |
| `--instance_type` | text | Instance type to start training session in | `t2.medium` |
| `--gpus` | integer | Number of GPUs to allocate per experiment | `0` |
| `--cpus` | integer | Number of CPUs to allocate per experiment | `1` |
| `--memory` | text | How much memory an experiment needs | `100` |
| `--datastore_name` | text | Datastore name to be mounted in training | None |
| `--datastore_version` | integer | Datastore version to be mounted in training | None |
| `--datastore_mount_dir` | text | Directory to mount Datastore in training job | None |
| `--framework` | choice (`lightning` &#x7C; `torch` &#x7C; `tensorflow` &#x7C; `julia` &#x7C; `torchelastic`) | Framework to use in training | `lightning` |
| `--use_spot` | boolean | Use spot instance. The spot instances, or preemptive instance can be shut down at will | `False` |
| `--ignore_warnings` | boolean | If we should ignore warning when executing commands | `False` |
| `--scratch_size` | integer | The size in GB of the scratch space attached to the experiment | `100` |
| `--scratch_mount_path` | text | The mount path to mount the scratch space | `/tmp/scratch` |
| `-l`, `--localdir` | boolean | N/A | `False` |
| `-d`, `--dockerfile` | text | Dockerfile for the image building | None |
| `--dependency_file` | text | Dependency file path. If not provided and if either `requirements.txt` or `environment.yml` is present in the current-working-directory, that'll be used | None |
| `--auto_resume` | boolean | Mark this run as auto-resumable. If underlying node/instance/VM is terminated experiment will be automatically resumed, with all artifacts restores from the last known state. The experiment code will receive SIGTERM signaland it must exit with status code 0 upon properly dumping its state to disk | `False` |
| `--help` | boolean | Show this message and exit. | `False` |

### grid session

Contains a grouping of commands to manage sessions workflows.

Executing the `grid session` command without any further arguments
or commands renders a list of all sessions registered to your Grid
user account.

**Usage:**

```
grid session [OPTIONS] COMMAND [ARGS]...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--global` | boolean | Fetch sessions from everyone in the team when flag is passed | `False` |
| `--help` | boolean | Show this message and exit. | `False` |

#### change-instance-type

Change the instance type of a session; this allows you to upgrade
or downgrade the compute capability of the session nodes while keeping
all of your work in progress untouched.

The session must be PAUSED in order for this command to succeed

Specifying --spot allows you to change the instance to an interuptable
spot instances (which come at a steap discount, but which can be
interrupted and shut down at any point in time depending on cloud
provider instance type demand).

specifying --on_demand changes the instance to an on-demand type,
which cannot be inturrupted but is more expensive.

**Usage:**

```
grid session change-instance-type [OPTIONS] SESSION_NAME INSTANCE_TYPE
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--spot` | boolean | Use a spot instance to launch the session | None |
| `--on_demand`, `--on-demand` | boolean | Use an on-demand instance to launch the session | None |
| `--help` | boolean | Show this message and exit. | `False` |

#### create

Creates a new interactive session with NAME.

Interactive sessions are optimized for development activites (before executing
hyperparemeter sweeps in a Run). Once created, sessions can be accessed via
VSCode, Jupyter-lab, or SSH interfaces.

Grid manages the installation of any/all core libraries, drivers, and interfaces
to the outside world. Sessions can be run on anything from a small 2 CPU core +
4GB memory instance to a monster machine with 96 CPU cores + 824 GB memory + eight
V100 GPUs + 40 GBPS network bandwidth (no, those values aren't typos!); or really
anything in between.

**Usage:**

```
grid session create [OPTIONS]
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--cluster` | text | Cluster to run on | `prod-2` |
| `--instance_type` | text | Instance type to start session in. | `t2.medium` |
| `--use_spot` | boolean | Use spot instance. The spot instances, or preemptive instance can be shut down at will | `False` |
| `--disk_size` | integer | The disk size in GB to allocate to the session. | `200` |
| `--datastore_name` | text | Datastore name to be mounted in the session. | None |
| `--datastore_version` | integer | Datastore version to be mounted in the session. | None |
| `--datastore_mount_dir` | text | Absolute path to mount Datastore in the session (defaults to /datastores/`<datastore-name>`). | None |
| `--config` | Path | Path to Grid config YML | None |
| `--name` | text | Name for this session | None |
| `--help` | boolean | Show this message and exit. | `False` |

#### delete

Deletes a session identified by SESSION_NAME.

Deleting a session will stop the running instance (and any computations being
performed on it) and billing of your account. All work done on the machine
is permenantly removed, including all/any saved files, code, or downloaded
data (assuming the source of the data was not a grid datastore - datastore
data is not deleted).

**Usage:**

```
grid session delete [OPTIONS] SESSION_NAME
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### mount

Mount session directory to local. The session is identified by
INTERACTIVE_NODE and MOUNT_DIR is a path to a directory on the local machine.

To mount a filesystem use:
ixNode:[dir] mountpoint

Examples:
    # Mounts the home directory on the interactive node in dir data
    grid interactive mount bluberry-122 ./data

    # mounts ~/data directory on the interactive node to ./data
    grid interactive mount bluberry-122:~/data ./data

To unmount it:
  fusermount3 -u mountpoint   # Linux
  umount mountpoint           # OS X, FreeBSD

Under the hood this is just passing data to sshfs after syncing grid's interactive,
i.e. this command is dumbed down sshfs

See Also:
    grid sync-ssh-config --help

**Usage:**

```
grid session mount [OPTIONS] INTERACTIVE_NODE MOUNT_DIR
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### pause

Pauses a session identified by the SESSION_NAME.

Pausing a session stops the running instance (and any computations being
performed on it - be sure to save your work!) and and billing of your account
for the machine. The session can be resumed at a later point with all your
persisted files and saved work unchanged.

**Usage:**

```
grid session pause [OPTIONS] SESSION_NAME
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### resume

Resumes a session identified by SESSION_NAME.
    

**Usage:**

```
grid session resume [OPTIONS] SESSION_NAME
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### ssh

SSH into the interactive node identified by NODE_NAME.

If you'd like the full power of ssh, you can use any ssh client and
do `ssh `<node_name>``. This command is stripped down version of it.

Example:

    1. Path to custom key:

    grid session ssh satisfied-rabbit-962 -- -i ~/.ssh/my-key

    2. Custom ssh option:

    grid session ssh satisfied-rabbit-962 -- -o "StrictHostKeyChecking accept-new"

**Usage:**

```
grid session ssh [OPTIONS] NODE_NAME [SSH_ARGS]...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

### grid ssh-keys

Manage SSH keys.

**Usage:**

```
grid ssh-keys [OPTIONS] COMMAND [ARGS]...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### add

Register a new SSH public key by providing a path to the KEY file
and a NAME for it in Grid.

**Usage:**

```
grid ssh-keys add [OPTIONS] NAME KEY
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### authorized_keys

list all registered SSH public keys in authorized_keys format

**Usage:**

```
grid ssh-keys authorized_keys [OPTIONS]
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--limit` | integer | maximum number of public keys to fetch | `100` |
| `--help` | boolean | Show this message and exit. | `False` |

#### list

"list currently registered SSH public keys

**Usage:**

```
grid ssh-keys list [OPTIONS]
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--limit` | integer | maximum number of public keys to fetch | `100` |
| `--help` | boolean | Show this message and exit. | `False` |

#### rm

remote registered SSH public key

**Usage:**

```
grid ssh-keys rm [OPTIONS] KEY_ID
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

### grid status

Checks the status of Runs, Experiments, and Sessions.

**Usage:**

```
grid status [OPTIONS] [RUN]
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--global` | boolean | Fetch status from all collaborators when flag is passed | `False` |
| `--help` | boolean | Show this message and exit. | `False` |

### grid stop

Stop Runs, Experiments, or Sessions.

**Usage:**

```
grid stop [OPTIONS] COMMAND [ARGS]...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### experiment

Stop one or more EXPERIMENT_NAMES.

This preserves progress completed up to this point, but stops
further computations and any billing for the machines used.

**Usage:**

```
grid stop experiment [OPTIONS] EXPERIMENT_NAMES...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### run

Stop one or more RUN_NAMES.

This preserves progress completed up to this point, but stops
further computations and any billing for the machines used.

**Usage:**

```
grid stop run [OPTIONS] RUN_NAMES...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### session

Stop one or more SESSION_NAMES.

NOTE: stopping a session permanently removes not only the record of the session,
      but all generated artifacts, metrics, logs, etc.

**Usage:**

```
grid stop session [OPTIONS] SESSION_NAMES...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

### grid sync-env

Synchronize the requirements file with packages and versions
from the currently active environment

**Usage:**

```
grid sync-env [OPTIONS]
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--config` | text | Path to Grid config YML | None |
| `--dependency_file` | text | Path to dependency file. Defaults to the `requirements.txt` or `environment.yml` found in the root | None |
| `--help` | boolean | Show this message and exit. | `False` |

### grid team

Show information about a TEAM_NAME.

**Usage:**

```
grid team [OPTIONS] TEAM_NAME
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

### grid user

Show the user information of the authorized user for this CLI instance.

**Usage:**

```
grid user [OPTIONS] COMMAND [ARGS]...
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### set-cluster-context

Specify the default CLUSTER_NAME which all operations should be run against.
    

**Usage:**

```
grid user set-cluster-context [OPTIONS] CLUSTER_NAME
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

#### set-default-cluster

Specify the default CLUSTER_ID which all operations should be run against.
    

**Usage:**

```
grid user set-default-cluster [OPTIONS] CLUSTER_NAME
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

### grid version

Prints CLI version to stdout.

**Usage:**

```
grid version [OPTIONS]
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

### grid view

Grid view opens a web UI page details the output of some RUN_OR_EXPERIMENTS.

**Usage:**

```
grid view [OPTIONS] RUN_OR_EXPERIMENT
```

**Options:**

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| `--help` | boolean | Show this message and exit. | `False` |

