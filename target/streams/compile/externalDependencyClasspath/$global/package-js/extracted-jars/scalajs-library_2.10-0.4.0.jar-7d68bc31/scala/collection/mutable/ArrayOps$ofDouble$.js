/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$;
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.thisCollection$extension__AD__Lscala_collection_mutable_WrappedArray = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofDouble().init___AD($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.toCollection$extension__AD__AD__Lscala_collection_mutable_WrappedArray = (function($$this, repr) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofDouble().init___AD(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.newBuilder$extension__AD__Lscala_collection_mutable_ArrayBuilder$ofDouble = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble().init___()
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.length$extension__AD__I = (function($$this) {
  return $$this.underlying.length
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.apply$extension__AD__I__D = (function($$this, index) {
  return $$this.underlying[index]
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.update$extension__AD__I__D__V = (function($$this, index, elem) {
  $$this.underlying[index] = elem
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.hashCode$extension__AD__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.equals$extension__AD__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_collection_mutable_ArrayOps$ofDouble(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var ofDouble$1 = null
    } else {
      var ofDouble$1 = ScalaJS.as.scala_collection_mutable_ArrayOps$ofDouble(x$1).repr__AD()
    };
    return ($$this === ofDouble$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.equals$extension__AD__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__AD__O__Z($$this, x$1))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.hashCode$extension__AD__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__AD__I($$this$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.update$extension__AD__I__D__ = (function($$this$3, index, elem) {
  return ScalaJS.bV(this.update$extension__AD__I__D__V($$this$3, index, elem))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.apply$extension__AD__I__ = (function($$this$4, index$2) {
  return ScalaJS.bD(this.apply$extension__AD__I__D($$this$4, index$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.length$extension__AD__ = (function($$this$5) {
  return ScalaJS.bI(this.length$extension__AD__I($$this$5))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.newBuilder$extension__AD__ = (function($$this$6) {
  return this.newBuilder$extension__AD__Lscala_collection_mutable_ArrayBuilder$ofDouble($$this$6)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.toCollection$extension__AD__AD__ = (function($$this$7, repr) {
  return this.toCollection$extension__AD__AD__Lscala_collection_mutable_WrappedArray($$this$7, repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.thisCollection$extension__AD__ = (function($$this$8) {
  return this.thisCollection$extension__AD__Lscala_collection_mutable_WrappedArray($$this$8)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofDouble$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofDouble$.prototype = ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype;
ScalaJS.is.scala_collection_mutable_ArrayOps$ofDouble$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayOps$ofDouble$)))
});
ScalaJS.as.scala_collection_mutable_ArrayOps$ofDouble$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayOps$ofDouble$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayOps$ofDouble")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofDouble$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayOps$ofDouble$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayOps$ofDouble$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofDouble$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayOps$ofDouble;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayOps$ofDouble$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayOps$ofDouble$: 0
}, false, "scala.collection.mutable.ArrayOps$ofDouble$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_ArrayOps$ofDouble$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayOps$ofDouble$;
ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofDouble = undefined;
ScalaJS.modules.scala_collection_mutable_ArrayOps$ofDouble = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofDouble)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofDouble = new ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofDouble
});
//@ sourceMappingURL=ArrayOps$ofDouble$.js.map
