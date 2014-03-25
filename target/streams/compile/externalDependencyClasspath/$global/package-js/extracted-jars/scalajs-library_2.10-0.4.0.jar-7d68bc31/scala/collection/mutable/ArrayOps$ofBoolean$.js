/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$;
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.thisCollection$extension__AZ__Lscala_collection_mutable_WrappedArray = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofBoolean().init___AZ($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.toCollection$extension__AZ__AZ__Lscala_collection_mutable_WrappedArray = (function($$this, repr) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofBoolean().init___AZ(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.newBuilder$extension__AZ__Lscala_collection_mutable_ArrayBuilder$ofBoolean = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofBoolean().init___()
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.length$extension__AZ__I = (function($$this) {
  return $$this.underlying.length
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.apply$extension__AZ__I__Z = (function($$this, index) {
  return $$this.underlying[index]
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.update$extension__AZ__I__Z__V = (function($$this, index, elem) {
  $$this.underlying[index] = elem
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.hashCode$extension__AZ__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.equals$extension__AZ__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_collection_mutable_ArrayOps$ofBoolean(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var ofBoolean$1 = null
    } else {
      var ofBoolean$1 = ScalaJS.as.scala_collection_mutable_ArrayOps$ofBoolean(x$1).repr__AZ()
    };
    return ($$this === ofBoolean$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.equals$extension__AZ__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__AZ__O__Z($$this, x$1))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.hashCode$extension__AZ__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__AZ__I($$this$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.update$extension__AZ__I__Z__ = (function($$this$3, index, elem) {
  return ScalaJS.bV(this.update$extension__AZ__I__Z__V($$this$3, index, elem))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.apply$extension__AZ__I__ = (function($$this$4, index$2) {
  return ScalaJS.bZ(this.apply$extension__AZ__I__Z($$this$4, index$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.length$extension__AZ__ = (function($$this$5) {
  return ScalaJS.bI(this.length$extension__AZ__I($$this$5))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.newBuilder$extension__AZ__ = (function($$this$6) {
  return this.newBuilder$extension__AZ__Lscala_collection_mutable_ArrayBuilder$ofBoolean($$this$6)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.toCollection$extension__AZ__AZ__ = (function($$this$7, repr) {
  return this.toCollection$extension__AZ__AZ__Lscala_collection_mutable_WrappedArray($$this$7, repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.thisCollection$extension__AZ__ = (function($$this$8) {
  return this.thisCollection$extension__AZ__Lscala_collection_mutable_WrappedArray($$this$8)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofBoolean$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofBoolean$.prototype = ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype;
ScalaJS.is.scala_collection_mutable_ArrayOps$ofBoolean$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayOps$ofBoolean$)))
});
ScalaJS.as.scala_collection_mutable_ArrayOps$ofBoolean$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayOps$ofBoolean$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayOps$ofBoolean")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofBoolean$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayOps$ofBoolean$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayOps$ofBoolean$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofBoolean$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayOps$ofBoolean;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayOps$ofBoolean$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayOps$ofBoolean$: 0
}, false, "scala.collection.mutable.ArrayOps$ofBoolean$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_ArrayOps$ofBoolean$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayOps$ofBoolean$;
ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofBoolean = undefined;
ScalaJS.modules.scala_collection_mutable_ArrayOps$ofBoolean = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofBoolean)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofBoolean = new ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofBoolean
});
//@ sourceMappingURL=ArrayOps$ofBoolean$.js.map
