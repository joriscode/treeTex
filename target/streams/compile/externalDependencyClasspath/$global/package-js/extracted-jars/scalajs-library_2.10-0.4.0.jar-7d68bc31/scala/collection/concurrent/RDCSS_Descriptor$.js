/** @constructor */
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor$.prototype.constructor = ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor$;
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor$.prototype.toString__T = (function() {
  return "RDCSS_Descriptor"
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor$.prototype.apply__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_RDCSS$undDescriptor = (function(old, expectedmain, nv) {
  return new ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor().init___Lscala_collection_concurrent_INode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_INode(old, expectedmain, nv)
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor$.prototype.unapply__Lscala_collection_concurrent_RDCSS$undDescriptor__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple3().init___O__O__O(x$0.old__Lscala_collection_concurrent_INode(), x$0.expectedmain__Lscala_collection_concurrent_MainNode(), x$0.nv__Lscala_collection_concurrent_INode()))
  }
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_concurrent_RDCSS$undDescriptor()
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor$.prototype.unapply__Lscala_collection_concurrent_RDCSS$undDescriptor__ = (function(x$0) {
  return this.unapply__Lscala_collection_concurrent_RDCSS$undDescriptor__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor$.prototype.apply__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_INode__ = (function(old, expectedmain, nv) {
  return this.apply__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_RDCSS$undDescriptor(old, expectedmain, nv)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_RDCSS$undDescriptor$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_RDCSS$undDescriptor$.prototype = ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor$.prototype;
ScalaJS.is.scala_collection_concurrent_RDCSS$undDescriptor$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_RDCSS$undDescriptor$)))
});
ScalaJS.as.scala_collection_concurrent_RDCSS$undDescriptor$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_RDCSS$undDescriptor$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.RDCSS_Descriptor")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_RDCSS$undDescriptor$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_RDCSS$undDescriptor$)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_RDCSS$undDescriptor$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_RDCSS$undDescriptor$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.RDCSS_Descriptor;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_RDCSS$undDescriptor$ = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_RDCSS$undDescriptor$: 0
}, false, "scala.collection.concurrent.RDCSS_Descriptor$", ScalaJS.data.java_lang_Object, {
  scala_collection_concurrent_RDCSS$undDescriptor$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor$.prototype.$classData = ScalaJS.data.scala_collection_concurrent_RDCSS$undDescriptor$;
ScalaJS.moduleInstances.scala_collection_concurrent_RDCSS$undDescriptor = undefined;
ScalaJS.modules.scala_collection_concurrent_RDCSS$undDescriptor = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_concurrent_RDCSS$undDescriptor)) {
    ScalaJS.moduleInstances.scala_collection_concurrent_RDCSS$undDescriptor = new ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_concurrent_RDCSS$undDescriptor
});
//@ sourceMappingURL=RDCSS_Descriptor$.js.map
