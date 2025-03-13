version_settings(constraint=">=0.22.2")

load('ext://restart_process', 'docker_build_with_restart')
load('ext://uibutton', 'cmd_button')

k8s_yaml([
    'deploy/development/kubernetes/papyrus-hello.deployment.yaml',
    'deploy/development/kubernetes/papyrus-hello.service.yaml',
])

k8s_resource('papyrus-hello', port_forwards='50052:50051')

docker_build(
    'hownee/papyrus-hello',
    dockerfile='deploy/development/Dockerfile',
    context='.',
    live_update=[
        sync('.', '/usr/src/app')
    ],
)