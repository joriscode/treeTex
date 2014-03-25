/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$;
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.thisCollection$extension__AF__Lscala_collection_mutable_WrappedArray = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofFloat().init___AF($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.toCollection$extension__AF__AF__Lscala_collection_mutable_WrappedArray = (function($$this, repr) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofFloat().init___AF(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.newBuilder$extension__AF__Lscala_collection_mutable_ArrayBuilder$ofFloat = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofFloat().init___()
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.length$extension__AF__I = (function($$this) {
  return $$this.underlying.length
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.apply$extension__AF__I__F = (function($$this, index) {
  return $$this.underlying[index]
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.update$extension__AF__I__F__V = (function($$this, index, elem) {
  $$this.underlying[index] = elem
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.hashCode$extension__AF__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.equals$extension__AF__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_collection_mutable_ArrayOps$ofFloat(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var ofFloat$1 = null
    } else {
      var ofFloat$1 = ScalaJS.as.scala_collection_mutable_ArrayOps$ofFloat(x$1).repr__AF()
    };
    return ($$this === ofFloat$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.equals$extension__AF__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__AF__O__Z($$this, x$1))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.hashCode$extension__AF__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__AF__I($$this$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.update$extension__AF__I__F__ = (function($$this$3, index, elem) {
  return ScalaJS.bV(this.update$extension__AF__I__F__V($$this$3, index, elem))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.apply$extension__AF__I__ = (function($$this$4, index$2) {
  return ScalaJS.bF(this.apply$extension__AF__I__F($$this$4, index$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.length$extension__AF__ = (function($$this$5) {
  return ScalaJS.bI(this.length$extension__AF__I($$this$5))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.newBuilder$extension__AF__ = (function($$this$6) {
  return this.newBuilder$extension__AF__Lscala_collection_mutable_ArrayBuilder$ofFloat($$this$6)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.toCollection$extension__AF__AF__ = (function($$this$7, repr) {
  return this.toCollection$extension__AF__AF__Lscala_collection_mutable_WrappedArray($$this$7, repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.thisCollection$extension__AF__ = (function($$this$8) {
  return this.thisCollection$extension__AF__Lscala_collection_mutable_WrappedArray($$this$8)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofFloat$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofFloat$.prototype = ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype;
ScalaJS.is.scala_collection_mutable_ArrayOps$ofFloat$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayOps$ofFloat$)))
});
ScalaJS.as.scala_collection_mutable_ArrayOps$ofFloat$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayOps$ofFloat$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayOps$ofFloat")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofFloat$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayOps$ofFloat$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayOps$ofFloat$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofFloat$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayOps$ofFloat;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayOps$ofFloat$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayOps$ofFloat$: 0
}, false, "scala.collection.mutable.ArrayOps$ofFloat$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_ArrayOps$ofFloat$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayOps$ofFloat$;
ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofFloat = undefined;
ScalaJS.modules.scala_collection_mutable_ArrayOps$ofFloat = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofFloat)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofFloat = new ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofFloat
});
//@ sourceMappingURL=ArrayOps$ofFloat$.js.map
