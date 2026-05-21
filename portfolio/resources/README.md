# Resources

Admin uploads are written to this folder. Metadata for each uploaded file is stored in MongoDB in the `resources` collection.

Keep this directory writable in deployments that support local disk writes. For serverless hosts with ephemeral filesystems, move `saveResourceFile` to object storage later while keeping the same MongoDB metadata model.
