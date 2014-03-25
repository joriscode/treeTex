/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper = (function() {
  ScalaJS.c.java_util_AbstractMap.call(this);
  this.scala$collection$convert$Wrappers$MapWrapper$$underlying$f = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper.prototype = new ScalaJS.inheritable.java_util_AbstractMap();
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper.prototype.size__I = (function() {
  return this.scala$collection$convert$Wrappers$MapWrapper$$underlying$f.size__I()
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper.prototype.get__O__O = (function(key) {
  try {
    var x1 = this.scala$collection$convert$Wrappers$MapWrapper$$underlying$f.get__O__Lscala_Option(key);
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
      return null
    };
    if (ScalaJS.is.scala_Some(x1)) {
      var x2 = ScalaJS.as.scala_Some(x1);
      var v = x2.x__O();
      return v
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  } catch ($jsexc$) {
    if (ScalaJS.is.java_lang_ClassCastException($jsexc$)) {
      var ex = $jsexc$;
      return null
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper.prototype.entrySet__Ljava_util_Set = (function() {
  return new ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1().init___Lscala_collection_convert_Wrappers$MapWrapper(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper.prototype.scala$collection$convert$Wrappers$MapWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_Map = (function($$outer, underlying) {
  this.scala$collection$convert$Wrappers$MapWrapper$$underlying$f = underlying;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_util_AbstractMap.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper.prototype.scala$collection$convert$Wrappers$MapWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$MapWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$MapWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$MapWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$MapWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$MapWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$MapWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$MapWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$MapWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MapWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$MapWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$MapWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MapWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$MapWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$MapWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$MapWrapper: 0
}, false, "scala.collection.convert.Wrappers$MapWrapper", ScalaJS.data.java_util_AbstractMap, {
  scala_collection_convert_Wrappers$MapWrapper: 1,
  java_util_AbstractMap: 1,
  java_util_Map: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$MapWrapper;
//@ sourceMappingURL=Wrappers$MapWrapper.js.map
