/** @constructor */
ScalaJS.c.scala_io_BytePickle$UnPicklerEnv = (function() {
  ScalaJS.c.scala_collection_mutable_HashMap.call(this);
  this.cnt$6 = 0
});
ScalaJS.c.scala_io_BytePickle$UnPicklerEnv.prototype = new ScalaJS.inheritable.scala_collection_mutable_HashMap();
ScalaJS.c.scala_io_BytePickle$UnPicklerEnv.prototype.constructor = ScalaJS.c.scala_io_BytePickle$UnPicklerEnv;
ScalaJS.c.scala_io_BytePickle$UnPicklerEnv.prototype.cnt__p6__I = (function() {
  return this.cnt$6
});
ScalaJS.c.scala_io_BytePickle$UnPicklerEnv.prototype.cnt$und$eq__p6__I__V = (function(x$1) {
  this.cnt$6 = x$1
});
ScalaJS.c.scala_io_BytePickle$UnPicklerEnv.prototype.nextLoc__I = (function() {
  this.cnt$und$eq__p6__I__V((this.cnt__p6__I() + 1));
  return this.cnt__p6__I()
});
ScalaJS.c.scala_io_BytePickle$UnPicklerEnv.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_HashMap.prototype.init___.call(this);
  this.cnt$6 = 64;
  return this
});
ScalaJS.c.scala_io_BytePickle$UnPicklerEnv.prototype.nextLoc__ = (function() {
  return ScalaJS.bI(this.nextLoc__I())
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$UnPicklerEnv = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$UnPicklerEnv.prototype = ScalaJS.c.scala_io_BytePickle$UnPicklerEnv.prototype;
ScalaJS.is.scala_io_BytePickle$UnPicklerEnv = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$UnPicklerEnv)))
});
ScalaJS.as.scala_io_BytePickle$UnPicklerEnv = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$UnPicklerEnv(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$UnPicklerEnv")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$UnPicklerEnv = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$UnPicklerEnv)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$UnPicklerEnv = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$UnPicklerEnv(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$UnPicklerEnv;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$UnPicklerEnv = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$UnPicklerEnv: 0
}, false, "scala.io.BytePickle$UnPicklerEnv", ScalaJS.data.scala_collection_mutable_HashMap, {
  scala_io_BytePickle$UnPicklerEnv: 1,
  scala_collection_mutable_HashMap: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_CustomParallelizable: 1,
  scala_collection_mutable_HashTable: 1,
  scala_collection_mutable_HashTable$HashUtils: 1,
  scala_collection_mutable_AbstractMap: 1,
  scala_collection_mutable_Map: 1,
  scala_collection_mutable_MapLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
  scala_collection_AbstractMap: 1,
  scala_collection_Map: 1,
  scala_collection_MapLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_GenMap: 1,
  scala_collection_GenMapLike: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$UnPicklerEnv.prototype.$classData = ScalaJS.data.scala_io_BytePickle$UnPicklerEnv;
//@ sourceMappingURL=BytePickle$UnPicklerEnv.js.map
