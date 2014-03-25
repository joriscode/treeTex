/** @constructor */
ScalaJS.c.scala_util_Either$LeftProjection = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.e$1 = null
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Either$LeftProjection.prototype.constructor = ScalaJS.c.scala_util_Either$LeftProjection;
ScalaJS.c.scala_util_Either$LeftProjection.prototype.e__Lscala_util_Either = (function() {
  return this.e$1
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.get__O = (function() {
  var x1 = this.e__Lscala_util_Either();
  if (ScalaJS.is.scala_util_Left(x1)) {
    var x2 = ScalaJS.as.scala_util_Left(x1);
    var a = x2.a__O();
    return a
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("Either.left.value on Right")
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.foreach__Lscala_Function1__O = (function(f) {
  var x1 = this.e__Lscala_util_Either();
  if (ScalaJS.is.scala_util_Left(x1)) {
    var x2 = ScalaJS.as.scala_util_Left(x1);
    var a = x2.a__O();
    return f.apply__O__O(a)
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.getOrElse__Lscala_Function0__O = (function(or) {
  var x1 = this.e__Lscala_util_Either();
  if (ScalaJS.is.scala_util_Left(x1)) {
    var x2 = ScalaJS.as.scala_util_Left(x1);
    var a = x2.a__O();
    return a
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    return or.apply__O()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.forall__Lscala_Function1__Z = (function(f) {
  var x1 = this.e__Lscala_util_Either();
  if (ScalaJS.is.scala_util_Left(x1)) {
    var x2 = ScalaJS.as.scala_util_Left(x1);
    var a = x2.a__O();
    return ScalaJS.uZ(f.apply__O__O(a))
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    return true
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.exists__Lscala_Function1__Z = (function(f) {
  var x1 = this.e__Lscala_util_Either();
  if (ScalaJS.is.scala_util_Left(x1)) {
    var x2 = ScalaJS.as.scala_util_Left(x1);
    var a = x2.a__O();
    return ScalaJS.uZ(f.apply__O__O(a))
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    return false
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.flatMap__Lscala_Function1__Lscala_util_Either = (function(f) {
  var x1 = this.e__Lscala_util_Either();
  if (ScalaJS.is.scala_util_Left(x1)) {
    var x2 = ScalaJS.as.scala_util_Left(x1);
    var a = x2.a__O();
    return ScalaJS.as.scala_util_Either(f.apply__O__O(a))
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    var x3 = ScalaJS.as.scala_util_Right(x1);
    var b = x3.b__O();
    return new ScalaJS.c.scala_util_Right().init___O(b)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.map__Lscala_Function1__Lscala_util_Either = (function(f) {
  var x1 = this.e__Lscala_util_Either();
  if (ScalaJS.is.scala_util_Left(x1)) {
    var x2 = ScalaJS.as.scala_util_Left(x1);
    var a = x2.a__O();
    return new ScalaJS.c.scala_util_Left().init___O(f.apply__O__O(a))
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    var x3 = ScalaJS.as.scala_util_Right(x1);
    var b = x3.b__O();
    return new ScalaJS.c.scala_util_Right().init___O(b)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.filter__Lscala_Function1__Lscala_Option = (function(p) {
  var x1 = this.e__Lscala_util_Either();
  if (ScalaJS.is.scala_util_Left(x1)) {
    var x2 = ScalaJS.as.scala_util_Left(x1);
    var a = x2.a__O();
    if (ScalaJS.uZ(p.apply__O__O(a))) {
      return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_util_Left().init___O(a))
    } else {
      return ScalaJS.modules.scala_None()
    }
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    return ScalaJS.modules.scala_None()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.toSeq__Lscala_collection_Seq = (function() {
  var x1 = this.e__Lscala_util_Either();
  if (ScalaJS.is.scala_util_Left(x1)) {
    var x2 = ScalaJS.as.scala_util_Left(x1);
    var a = x2.a__O();
    return ScalaJS.as.scala_collection_Seq(ScalaJS.modules.scala_collection_Seq().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [a]))))
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    return ScalaJS.as.scala_collection_Seq(ScalaJS.modules.scala_collection_Seq().empty__Lscala_collection_GenTraversable())
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.toOption__Lscala_Option = (function() {
  var x1 = this.e__Lscala_util_Either();
  if (ScalaJS.is.scala_util_Left(x1)) {
    var x2 = ScalaJS.as.scala_util_Left(x1);
    var a = x2.a__O();
    return new ScalaJS.c.scala_Some().init___O(a)
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    return ScalaJS.modules.scala_None()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.copy__Lscala_util_Either__Lscala_util_Either$LeftProjection = (function(e) {
  return new ScalaJS.c.scala_util_Either$LeftProjection().init___Lscala_util_Either(e)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.copy$default$1__Lscala_util_Either = (function() {
  return this.e__Lscala_util_Either()
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.productPrefix__T = (function() {
  return "LeftProjection"
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.e__Lscala_util_Either();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_Either$LeftProjection(x$1)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_util_Either$LeftProjection(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var LeftProjection$1 = ScalaJS.as.scala_util_Either$LeftProjection(x$1);
      return ScalaJS.anyRefEqEq(this.e__Lscala_util_Either(), LeftProjection$1.e__Lscala_util_Either())
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.init___Lscala_util_Either = (function(e) {
  this.e$1 = e;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.copy__Lscala_util_Either__ = (function(e) {
  return this.copy__Lscala_util_Either__Lscala_util_Either$LeftProjection(e)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.toOption__ = (function() {
  return this.toOption__Lscala_Option()
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.toSeq__ = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.filter__Lscala_Function1__ = (function(p) {
  return this.filter__Lscala_Function1__Lscala_Option(p)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.map__Lscala_Function1__ = (function(f) {
  return this.map__Lscala_Function1__Lscala_util_Either(f)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.flatMap__Lscala_Function1__ = (function(f$2) {
  return this.flatMap__Lscala_Function1__Lscala_util_Either(f$2)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.exists__Lscala_Function1__ = (function(f$3) {
  return ScalaJS.bZ(this.exists__Lscala_Function1__Z(f$3))
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.forall__Lscala_Function1__ = (function(f$4) {
  return ScalaJS.bZ(this.forall__Lscala_Function1__Z(f$4))
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.getOrElse__Lscala_Function0__ = (function(or) {
  return this.getOrElse__Lscala_Function0__O(or)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.foreach__Lscala_Function1__ = (function(f$5) {
  return this.foreach__Lscala_Function1__O(f$5)
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.get__ = (function() {
  return this.get__O()
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.e__ = (function() {
  return this.e__Lscala_util_Either()
});
/** @constructor */
ScalaJS.inheritable.scala_util_Either$LeftProjection = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Either$LeftProjection.prototype = ScalaJS.c.scala_util_Either$LeftProjection.prototype;
ScalaJS.is.scala_util_Either$LeftProjection = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Either$LeftProjection)))
});
ScalaJS.as.scala_util_Either$LeftProjection = (function(obj) {
  if ((ScalaJS.is.scala_util_Either$LeftProjection(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Either$LeftProjection")
  }
});
ScalaJS.isArrayOf.scala_util_Either$LeftProjection = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Either$LeftProjection)))
});
ScalaJS.asArrayOf.scala_util_Either$LeftProjection = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Either$LeftProjection(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Either$LeftProjection;", depth)
  }
});
ScalaJS.data.scala_util_Either$LeftProjection = new ScalaJS.ClassTypeData({
  scala_util_Either$LeftProjection: 0
}, false, "scala.util.Either$LeftProjection", ScalaJS.data.java_lang_Object, {
  scala_util_Either$LeftProjection: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Either$LeftProjection.prototype.$classData = ScalaJS.data.scala_util_Either$LeftProjection;
//@ sourceMappingURL=Either$LeftProjection.js.map
