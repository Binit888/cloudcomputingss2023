sudo kubectl delete deployment minio-deployment \
&& sudo kubectl delete pvc minio-pv-claim \
&& sudo kubectl delete svc minio-service
